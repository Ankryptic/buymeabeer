"use server"
import { getServerSession } from "next-auth";
import { Handler } from "../api/auth/[...nextauth]/route";
import UserDb from "../db/userDB";
import User from "@/models/User";

// For validating data in Server
export const isValid = async(formData) => {
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
export const updateCompletePage = async(formData) => {

    const valid = await isValid(formData);

    if (valid) {

        // Connect to DB
        await UserDb();

        const session = await getServerSession(Handler)
        console.log(session)

        // Update the data
        const dbUser = await User.findOne({ email: session?.user.email})
        console.log(dbUser.toObject()) 

    }
    else {  // if not isvalid then throw Error
        console.log("Not Valid")
    }

}