import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="font-gooflex h-16 bg-[#181921] text-white flex items-center justify-between px-10">
            <div className="flex items-center justify-center gap-10">
                <Link href={"/faq"}><span>FAQ</span></Link>
                <Link href={"/wall"}><span>Wall of &hearts;</span></Link>
                <span>Resources</span>
            </div>

            <div className="logo flex items-center justify-center">
                <Image
                    src="/cheers_noBG.gif"
                    width={50}
                    height={50}
                    alt="Picture of the beer"
                />
                <span className="font-playwrite text-lg font-bold">Buy me a beer</span>
            </div>

            <div className="flex items-center justify-center gap-5">
                <div>
                    <span>Search creators</span>
                </div>
                <Link href={"/login"} className="bg-red-300 w-22 h-9 font-semibold flex items-center justify-center rounded-2xl"><span>Log in</span></Link>
                <Link href={"/signup"}>
                    <div class="relative group">
                        <div
                            class="relative w-26 h-10 opacity-90 overflow-hidden rounded-xl bg-black z-10"
                        >
                            <div
                                class="absolute z-10 -translate-x-44 group-hover:translate-x-120 ease-in transistion-all duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
                            ></div>

                            <div
                                class="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-2xl inset-0.5 bg-black"
                            >
                                <button
                                    name="text"
                                    class="input font-semibold text-lg h-full opacity-90 w-full px-1 py-px rounded-xl bg-[#0d0d12]"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div
                                class="absolute duration-1000 group-hover:animate-spin w-full h-25 bg-linear-to-r from-green-500 to-yellow-500 blur-[30px]"
                            ></div>
                        </div>
                    </div>

                </Link>
            </div>
        </nav>
    )
}

export default Navbar;