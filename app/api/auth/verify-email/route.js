import { NextResponse } from "next/server";

import User from "@/models/User";
import ConnectDB from "@/app/db/ConnectDB";

export async function POST(req) {
    try {
        const { email, otp } = await req.json();

        await ConnectDB();
        const user = await User.findOne({
            email: email.toLowerCase().trim(),
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        if (user.emailVerified) {
            return NextResponse.json({
                success: true,
                message: "Email already verified",
            });
        }

        if (!user.emailVerificationOTP) {
            return NextResponse.json(
                { error: "OTP not found" },
                { status: 400 }
            );
        }

        if (user.emailVerificationOTPExpires < new Date()) {
            return NextResponse.json(
                { error: "OTP expired" },
                { status: 400 }
            );
        }

        if (user.emailVerificationOTP !== otp) {
            return NextResponse.json(
                { error: "Invalid OTP" },
                { status: 400 }
            );
        }

        user.emailVerified = true;
        user.emailVerificationOTP = undefined;
        user.emailVerificationOTPExpires = undefined;

        await user.save();

        return NextResponse.json({
            success: true,
            message: "Email verified successfully",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}