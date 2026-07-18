import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {

    return (
        <div className="w-full flex bg-[#2f2d41] text-white">

            <div className="left-section w-[30%] h-screen bg-[#2f2d41]">
                <div className="left-nav px-12 pt-12">
                    <Link href={"/"}><Image
                        src={"/cheers_noBG.gif"}
                        width={80}
                        height={80}
                        alt= "logo"
                    /></Link>
                    <div>Welcome to Buy Me a Beer</div>
                </div>

                <div className="left-main">
                    <div className=" w-full h-[70%]">
                        <Image
                            className="object-contain"
                            src={"/donations.png"}
                            height={1000}
                            width={1000}
                            alt= "donations pic"
                        />
                    </div>
                </div>
            </div>

            <div className="right-section w-[70%] h-screen rounded-tl-4xl rounded-bl-4xl bg-[#5b5570]">
                <div className="right-nav w-full h-[12%] flex items-center justify-between md:justify-end">
                    <Link className="md:hidden" href={"/"}><Image
                        src={"/cheers_noBG.gif"}
                        width={80}
                        height={80}
                        alt= "logo"
                    /></Link>
                    <div className="space-x-2 pr-12 pt-8">
                        <span>Already have an account?</span>
                        <Link href={"/signup"} className='underline hover:no-underline'>Sign in</Link>
                    </div>
                </div>

                <div className="right-main flex flex-col h-[75%] items-center justify-center">

                    <div className="ch-username w-1/2 space-y-1">
                        <div className="font-semibold text-3xl">Create your account</div>
                        <div className="text-gray-300">Choose a username for your page.</div>
                        <div className="user-input flex items-center bg-[#2f2d41] hover:bg-[#3b354f] cursor-text w-full rounded-2xl px-6 py-4 gap-2 mt-4">
                            <span>buymeabeer.com/</span>
                            <input type="text" placeholder="username" className="outline-none w-full"/>
                        </div>
                    </div>

                </div>

                    <hr />
                <div className="right-footer w-full h-[12%] px-12">

                    <div className="flex items-center justify-between h-full">
                        <h5 className="text-gray-300 text-[14px]">By continuing, you agree to the <Link className="text-white underline hover:no-underline" href={"/terms"}>terms of service</Link> and <Link className="text-white underline hover:no-underline" href={"/policy"}>privacy policy</Link> .</h5>

                        <button className='cursor-pointer  text-center bg-[#181921] hover:bg-[#0d0d12] px-12 py-4 rounded-full'>Sign up</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Signup;