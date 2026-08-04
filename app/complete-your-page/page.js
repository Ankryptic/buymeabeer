"use client"
import React, { startTransition, useActionState, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { updateCompletePage } from "../action/UserAction";

const CompleteYourPage = () => {
    const { data: session, status } = useSession()
    const [profpic, setProfPic] = useState("")
    const [completeForm, setCompleteForm] = useState({
        profilePic: "",
        name: "",
        about: "",
        social: "",
    })
    const [error, setError] = useState({})


    // Function to validate form
    const validate = () => {
        const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/

        const newErrors = {
            profilePic: "",
            name: "",
        }

        if (completeForm.profilePic === "") {
            newErrors.profilePic = "Profile Pic is Required!";
        }

        if (completeForm.name === "") {
            newErrors.name = "Name is Required!";
        }
        else if (!nameRegex.test(completeForm.name)) {
            newErrors.name = "Name can only contains letter.";
        }

        setError(newErrors)
        return Object.values(newErrors).every((err) => err === "");
    }


    // handle profile pic upload action
    const handleUpload = (e) => {
        const file = e.target.files[0];
        console.log(file.type)

        if (!file) return;
        else if (!(file.type).startsWith("image/")) return;

        const url = URL.createObjectURL(file)
        setProfPic(url)
        setCompleteForm({ ...completeForm, profilePic: file })
    }


    // Handle the Form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompleteForm({ ...completeForm, [name]: value })
        console.log(completeForm)
    }

    const updateData = async () => {
        await updateCompletePage(completeForm)
    }

    // handle next button click
    const handleAction = (prev, e) => {
        if (validate()) {
           startTransition(updateData)
        }
    }

    const [data, action, pending] = useActionState(handleAction, completeForm)

    return <>
        <div className="navbar flex items-center justify-between px-12 pt-8">
            <div className="logo">
                <Link href={"/"}>
                    <Image
                        src={"/cheers_noBG.gif"}
                        height={60}
                        width={60}
                        alt="logo"
                    /></Link>
            </div>

            <button className="border border-white hover:bg-[#2f2d41] cursor-pointer text-white px-4 py-2 rounded-xl" onClick={() => signOut()}>
                Logout
            </button>
        </div>

        <div className="main text-white w-full">
            <div className="section-1 w-1/2 m-auto mb-20">
                <div className="text-center text-3xl">Complete your page</div>

                <div className="container mt-10 flex gap-24 pl-10 mb-10">
                    <div className="space-y-5">
                        <div className="img-cont rounded-full w-50 h-50 overflow-hidden border">
                            <Image
                                className="object-contain"
                                src={profpic || "/profile.svg"}
                                accept="image/*"
                                width={1000}
                                height={1000}
                                alt="profile"
                            />
                        </div>
                        {error.profilePic && <span className="text-xs font-bold text-red-600 pl-10">{error.profilePic}</span>}

                        <div className="upload-btn w-fit">
                            <label htmlFor="img-upload" className="flex items-center gap-2 border border-white hover:border-gray-300 hover:text-gray-300 rounded-full px-3 py-2 cursor-pointer">
                                <Image
                                    src={"/camera.svg"}
                                    width={20}
                                    height={20}
                                    alt="camera"
                                />
                                <span>Upload profile photo</span>
                            </label>
                            <input type="file" name="profilePic" id="img-upload" style={{ display: "none" }} required onChange={handleUpload} />
                        </div>
                    </div>

                    <div className="w-100 space-y-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            {error.name && <span className="text-xs font-bold text-red-600">{error.name}</span>}
                            <input type="text" placeholder="Name" id="name" name="name" className="bg-[#2f2d41] focus:bg-[#3b354f] text-white w-full rounded-xl px-4 py-4" required value={completeForm.name} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="about">About</label>
                            <textarea name="about" id="about" placeholder="Write about your passion and what drives you. Explain how contributions can make a difference in your work and create a connection with your supporters…" className="h-36 resize-none bg-[#2f2d41] focus:bg-[#3b354f] text-white w-full rounded-xl px-4 py-4" cols={40} required value={completeForm.about} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="social">Website or social link</label>
                            <input type="text" placeholder="https://" id="social" name="social" className="bg-[#2f2d41] focus:bg-[#3b354f] text-white w-full rounded-xl px-4 py-4" value={completeForm.social} onChange={handleChange} />
                        </div>
                    </div>
                </div>

            </div>

            <div className="section-2 absolute bottom-0 h-20 w-full ">
                <div className="bar w-full flex gap-3">
                    <div className="bar-1 h-1 w-full bg-white"></div>
                    <div className="bar-1 h-1 w-full bg-black"></div>
                    <div className="bar-1 h-1 w-full bg-black"></div>
                </div>
                <div className="w-full flex items-center justify-end my-2 pr-15">
                    <button className="text-center cursor-pointer bg-[#181921] hover:bg-[#0d0d12] py-4 px-12 rounded-full"
                        onClick={action}>Next</button>
                </div>
            </div>
        </div>
    </>
}

export default CompleteYourPage;