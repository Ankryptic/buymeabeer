"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const arrows = useRef()
    const [upArrow, setupArrow] = useState(false);

    useEffect(() => {
        const upArrowSrc = "/upArrow.svg";
        const downArrowSrc = "/downArrow.svg";

        const updateSrc = upArrow ? upArrowSrc : downArrowSrc;
        arrows.current.src = updateSrc;
    }, [upArrow])

    const handleRes = () => {
        setupArrow(!upArrow);
    }

    return (
        <nav className="w-full font-gooflex h-20 bg-[#181921] text-white flex items-center justify-between px-7">
            <div className="flex items-center justify-center gap-3 select-none">
                <Link href={"/faq"} className="cursor-pointer hover:bg-[#3b354f] px-4 py-2 text-[15px] rounded-full transition-all duration-300"><span>FAQ</span></Link>
                <Link href={"/wall"} className="cursor-pointer hover:bg-[#3b354f] px-4 py-2 text-[15px] rounded-full transition-all duration-300" ><span>Wall of &hearts;</span></Link>
                <div className="cursor-pointer hover:bg-[#3b354f] px-4 py-2 rounded-full flex items-center justify-center gap-x-1 transition-all duration-300" onClick={handleRes} >
                    <span className="text-[15px]">Resources</span>
                    <Image
                        ref={arrows}
                        src="/downArrow.svg"
                        width={18}
                        height={18}
                        alt="Down Arrow"
                    />
                </div>
            </div>

            <div className="logo  cursor-pointer">
                <Link href= "/" className="flex items-center justify-center">
                <Image
                    src="/cheers_noBG.gif"
                    width={60}
                    height={60}
                    alt="Picture of the beer"
                />
                <span className="font-playwrite text-lg font-bold">Buy me a beer</span>
                
                </Link>
            </div>

            <div className="flex items-center justify-center gap-2 select-none ">
                <div className="flex items-center bg-[#5b5570] hover:bg-[#3b354f] cursor-text w-54 rounded-full p-2 pl-3 gap-2">
                    <Image
                        className="invert"
                        src="/search.svg"
                        width={22}
                        height={22}
                        alt="search svg"
                    />
                    <span className="text-[15px]">Search creators</span>
                </div>
                <Link href={"/login"} className="hover:bg-[#3b354f] px-4 py-2 text-[15px] font-semibold flex items-center justify-center rounded-full transition-all duration-300"><span>Log in</span></Link>
                <Link href={"/signup"}>
                    <div className="relative group">
                        <div
                            className="relative w-26 h-10 opacity-90 overflow-hidden rounded-xl bg-black z-10"
                        >
                            <div
                                className="absolute z-10 -translate-x-44 group-hover:translate-x-120 ease-in transistion-all duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
                            ></div>

                            <div
                                className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-2xl inset-0.5 bg-black"
                            >
                                <button
                                    name="text"
                                    className="input font-semibold h-full opacity-90 w-full px-1 py-px text-[15px] rounded-xl bg-[#0d0d12]"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div
                                className="absolute duration-1000 group-hover:animate-spin w-full h-25 bg-linear-to-r from-green-500 to-yellow-500 blur-[30px]"
                            ></div>
                        </div>
                    </div>

                </Link>
            </div>
        </nav>
    )
}

export default React.memo(Navbar);