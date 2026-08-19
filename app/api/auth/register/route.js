import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";

import User from "@/models/User";
import ConnectDB from "@/app/db/ConnectDB";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();

        if (!username || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await ConnectDB();
        const normalizedEmail = email.toLowerCase().trim();

        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const otp = crypto.randomInt(100000, 1000000).toString();

        const otpExpires = new Date(
            Date.now() + 5 * 60 * 1000
        );

        await User.create({
            username,
            email: normalizedEmail,
            password: hashedPassword,

            emailVerified: false,

            emailVerificationOTP: otp,
            emailVerificationOTPExpires: otpExpires,

            profileCompleted: false,
        });

        // Send OTP here
        await sendVerificationEmail(
            normalizedEmail,
            otp
        );

        return NextResponse.json({
            success: true,
            message: "OTP sent to your email",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}