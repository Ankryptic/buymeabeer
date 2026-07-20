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
                <div>
                    
                </div>
            </div>

        </div>
    </>
}

export default CompleteYourPage;