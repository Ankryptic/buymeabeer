import React from "react";
import Link from "next/link";
import Image from "next/image";

const CompleteYourPage = () => {
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

            <button className="border border-white hover:bg-[#2f2d41] cursor-pointer text-white px-4 py-2 rounded-xl">
                Logout
            </button>
        </div>

        <div className="main text-white w-full">
            <div className="section-1 w-1/2 m-auto">
                <div className="text-center text-3xl">Complete your page</div>

                <div className="container mt-12 flex gap-24 pl-10">
                    <div className="space-y-5">
                        <div className="img-cont rounded-full w-50 h-50">
                            <Image
                                className="object-contain invert"
                                src={"/profile.svg"}
                                width={1000}
                                height={1000}
                                alt="profile"
                            />
                        </div>
                        <div className="upload-btn w-fit">
                            <label htmlFor="img-upload" className="flex items-center gap-2 border border-white rounded-full px-3 py-2">
                                <Image
                                    src={"/camera.svg"}
                                    width={20}
                                    height={20}
                                    alt="camera"
                                />
                                <span>Upload profile photo</span>
                            </label>
                            <input type="file" id="img-upload" style={{ display: "none" }}/>
                        </div>
                    </div>

                    <div className="w-100 space-y-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Name" id="name" className="bg-[#2f2d41] focus:bg-[#3b354f] text-white w-full rounded-xl px-4 py-4"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="about">About</label>
                            <textarea name="About" id="about" placeholder="Write about your passion and what drives you. Explain how contributions can make a difference in your work and create a connection with your supporters…" className="h-36 resize-none bg-[#2f2d41] focus:bg-[#3b354f] text-white w-full rounded-xl px-4 py-4" cols={40}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="social">Website or social link</label>
                            <input type="text" placeholder="https://" id="social" className="bg-[#2f2d41] focus:bg-[#3b354f] text-white w-full rounded-xl px-4 py-4"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="section-2 absolute bottom-0 h-26 w-full ">
                <div className="bar w-full flex gap-3">
                    <div className="bar-1 h-1 w-full bg-white"></div>
                    <div className="bar-1 h-1 w-full bg-black"></div>
                    <div className="bar-1 h-1 w-full bg-black"></div>
                </div>
                <div className="w-full flex items-center justify-end my-5 pr-15">
                    <button className="text-center cursor-pointer bg-[#181921] hover:bg-[#0d0d12] py-4 px-12 rounded-full">Next</button>
                </div>
            </div>
        </div>
    </>
}

export default CompleteYourPage;