"use client"
import React from "react";
import Image from "next/image";

const UserProfile = ({ showEdit, setShowEdit }) => {

    const handleCancel = () => {
        setShowEdit(false);
    }

    return <>
        <div className="main relative z-1 flex items-center justify-center w-full h-[72vh] text-white">

            {/* Cover Image */}
            <div className="absolute top-0 w-full -z-10 cover-pic flex items-center justify-center bg-red-300 h-50">
                <div className="absolute -z-9 w-full h-full">
                    <Image
                        className="object-cover"
                        src={"/blank_cover.png"}
                        fill
                        alt="cover-pic"
                    />
                </div>
                <label className="relative -top-5 z-1 flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-xl cursor-pointer" htmlFor="upload_cover">
                    <Image
                        className=""
                        src={"/image_icon.svg"}
                        height={16}
                        width={16}
                        alt="image-icon"
                    />
                    <span className="font-semibold text-sm">Add cover image</span>
                </label>
                <input type="file" id="upload_cover" style={{ display: "none" }} />
            </div>

            <div className="mt-25 w-full flex justify-center gap-2">

                <div className="box1 bg-[#2f2d41] rounded-3xl p-8 w-130 h-fit space-y-6">

                    <div className="flex items-center justify-between">
                        <span className="font-semibold">About Shreeraj</span>
                        <button type="buton" className="underline hover:no-underline text-sm cursor-pointer" onClick={() => setShowEdit(!showEdit)}>Edit</button>
                    </div>

                    <div>
                        <span className="text-gray-300">AI Engineer</span>
                    </div>

                    <hr className="text-gray-300" />

                    <div className="space-y-2">
                        <div className="text-lg font-bold">Recent supports</div>
                        <div className="bg-[#3b354f] text-red-500 h-35 rounded-xl flex flex-col items-center justify-center">
                            <span className="animate-heartbeat text-2xl">&hearts;</span>
                            <span className="text-sm">Be the first one to support Shreeraj.</span>
                        </div>
                    </div>

                </div>

                <div className="box2 bg-[#2f2d41] rounded-3xl p-8 w-130 h-fit space-y-6">

                    <div className="flex items-center justify-between">
                        <span className="font-semibold">About Shreeraj</span>
                    </div>

                    <div>
                        <input type="text" placeholder="Name or @yoursocial (optional)" className="w-full bg-[#3b354f] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />
                    </div>

                    <div>
                        <input type="text" placeholder="Enter your email" className="w-full bg-[#3b354f] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />
                    </div>

                    <div>
                        <button type="button" className="w-full bg-[#181921] hover:bg-[#222130] cursor-pointer px-4 py-4 rounded-full">Follow</button>
                    </div>

                </div>

            </div>

        </div>

        {/* Edit Section */}
        { showEdit && <div className="absolute w-full min-h-screen z-21 top-2 p-4 bg-[#000000c3] text-white">
            <div className="min-h-screen bg-[#3b354f] text-white rounded-2xl pb-20">

                <nav className="sticky top-0 z-22 flex items-center justify-between w-full h-20 bg-[#3b354f] border-b border-b-white px-10 rounded-t-2xl">
                    <div className="font-bold text-lg">Edit page</div>
                    <div className="btns flex items-center gap-4">
                        <button type="button" className="px-6 py-2 border-2 border-[#0d0d12] hover:bg-[#0d0d12] rounded-full cursor-pointer" onClick={handleCancel}>Cancel</button>
                        <button type="button" className="px-8 py-2 bg-[#181921] hover:bg-[#0d0d12] rounded-full">Save</button>
                    </div>
                </nav>

                <div className="main-inside-edit w-[38%] m-auto bg-red-90a0 space-y-4">

                    <div className="mt-5">Profile Photo</div>
                    <div className="flex gap-4">
                        <div className="relative w-25 h-25 rounded-xl overflow-hidden border-2 border-gray-300">
                            <Image
                                className="invert object-contain"
                                src={"/profile.svg"}
                                fill
                                alt="profile-photo"
                            />
                        </div>
                        <div className="mt-18">
                            <label htmlFor="profile-photo" className="px-4 py-2 border-2 border-[#0d0d12] hover:bg-[#0d0d12] rounded-full cursor-pointer">Upload</label>
                            <input type="file" id="profile-photo" style={{ display: "none" }} />
                        </div>
                    </div>

                    <hr />

                    <div className="mt-8">Full name</div>
                    <input type="text" defaultValue={"Shreeraj"} className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">What are you creating?</div>
                    <input type="text" placeholder="creating piano music, building Coronarelief.org, posting a new art everyday" className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">About me</div>
                    <input type="text" defaultValue={"Ai Engineer h"} className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">Featured video</div>
                    <input type="text" placeholder="Paste your Youtube link here" className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">Social links</div>
                    <input type="text" defaultValue={"https://www.instagram.com/shreeraj__12/"} className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                </div>

            </div>

        </div>}
    </>
}


export default React.memo(UserProfile);