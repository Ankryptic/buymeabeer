"use client"
import React, { useState } from "react";
import Image from "next/image";

const EditPage = ({ active = false }) => {

    if (active) {
        return (
            <div className="absolute w-full min-h-screen z-21 top-2 p-4 bg-[#000000c3] text-white ">
                <div className="min-h-screen bg-[#3b354f] text-white rounded-2xl pb-20">

                    <nav className="sticky top-0 z-22 flex items-center justify-between w-full h-20 bg-[#3b354f] border-b border-b-white px-10 rounded-t-2xl">
                        <div className="font-bold text-lg">Edit page</div>
                        <div className="btns flex items-center gap-4">
                            <button type="button" className="px-6 py-2 border-2 border-[#0d0d12] hover:bg-[#0d0d12] rounded-full cursor-pointer">Cancel</button>
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

            </div>
        )
    }

}

export default React.memo(EditPage);