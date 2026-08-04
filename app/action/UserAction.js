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

    const result = await isValid(formData);

    if (result.succes) {

        // Connect to DB
        await UserDb();

        const session = await getServerSession(Handler)

        // Update the data
        const dbUser = await User.findOneAndUpdate({ email: session?.user.email},
            {
                name: formData.name,
                profilePic: formData.profilePic,
                about: formData.about,
                socialLink: formData.social,
                profileCompleted: true
            }
        )
        console.log(dbUser.toObject())
        return result;

    }
    else {  // if not isvalid then throw Error
        return result.newErrors;
    }

}