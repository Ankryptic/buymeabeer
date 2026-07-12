import React from "react";
import Link from "next/link";

const HomeContent = () => {
    return (
        <main className="font-gooflex text-white">
            <div className="section-1 h-screen container flex flex-col items-center bg-red-5000">
                <h1 className="w-[60%] text-8xl font-bold text-center mt-60">Fund your creative work</h1>
                <p className="w-[60%] text-center text-2xl my-4">Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>
                <div className="get-stated mt-10">
                    <Link href={"/signup"}>
                    <div className="relative group">
                        <div
                            className="relative w-70 h-20 opacity-90 overflow-hidden rounded-full bg-black z-10"
                        >
                            <div
                                className="absolute z-10 -translate-x-44 group-hover:translate-x-120 ease-in transistion-all duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
                            ></div>

                            <div
                                className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-full inset-0.5 bg-black"
                            >
                                <button
                                    name="text"
                                    className="input font-semibold text-2xl h-full opacity-90 w-full px-1 py-px rounded-full bg-[#0d0d12]"
                                >
                                    Start my page
                                </button>
                            </div>
                            <div
                                className="absolute duration-1000 group-hover:animate-spin w-full h-25 bg-linear-to-r from-green-500 to-yellow-500 blur-[30px]"
                            ></div>
                        </div>
                    </div>

                </Link>
                </div>
                <p className="text-lg my-4">It’s free and takes less than a minute!</p>
            </div>
        </main>
 )
}

export default HomeContent;