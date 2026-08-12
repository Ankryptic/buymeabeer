"use server"
import { getServerSession } from "next-auth";
import { Handler } from "../api/auth/[...nextauth]/route";
import ConnectDB from "../db/ConnectDB";
import User from "@/models/User";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";


// For validating data in Server
export const isValid = async (formData) => {
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/

    const newErrors = {
        profilePic: "",
        name: "",
    }

    if (formData.profilePic === "") {
        newErrors.profilePic = "Profile Pic is Required!";
    }

    if (formData.name === "") {
        newErrors.name = "Name is Required!";
    }
    else if (!nameRegex.test(formData.name)) {
        newErrors.name = "Name can only contains letter.";
    }

    return {
        succes: Object.values(newErrors).every((err) => err === ""),
        newErrors
    }
}

// Check Validation and Then Update Complete your page data in the Database
export const updateCompletePage = async (formData) => {

    const result = await isValid(formData);

    if (result.succes) {

        // Connect to DB
        await ConnectDB();

        const session = await getServerSession(Handler)

        // Update the data
        const dbUser = await User.findOneAndUpdate({ email: session?.user.email },
            {
                name: formData.name,
                profilePic: formData.profilePic,
                about: formData.about,
                socialLink: formData.social,
                profileCompleted: true,
                setupPayout: true,
            }
        )
        return result;

    }
    else {  // if not isvalid then throw Error
        return result.newErrors;
    }

}

export const getUserData = async (username) => {
    await ConnectDB()

    const dbUser = await User.findOne({ username: username })

    if (dbUser) {
        return {
            name: dbUser.name,
            username: dbUser.username,
            profilePic: dbUser.profilePic,
            profileCompleted: dbUser.profileCompleted,
            about: dbUser.about,
            socialLink: dbUser.socialLink,
            setupPayout: dbUser.setupPayout,
        }
    }
    else {
        throw Error("User Not Fount");
    }
}

// Payment Method
export const intitPayment = async (amount, to_username , paymentForm) => {
    await ConnectDB();

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_SECRET })

    let option = {
        amount: amount * 100,
        currency: "INR",
    }

    let order = await instance.orders.create(option)

    // Update Payment data in DB
    await Payment.create({
        amount: amount,
        name: paymentForm.name,
        to_username: to_username,
        Oid: order.id,
        message: paymentForm.message,
        
    })

    return order;
}
