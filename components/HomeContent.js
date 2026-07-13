import React from "react";
import Link from "next/link";
import Image from "next/image";

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

            <div className="section-2 container m-auto mt-20 bg-[#2f2d41] rounded-[50px] flex flex-col items-center justify-center p-14 w-[80%]">
                <div className="text-lg">SUPPORT</div>
                <h2 className="text-wrap text-6xl font-bold text-center leading-20">Give your audience <br /> an easy way to say thanks.</h2>
                <p className="text-2xl text-center px-24 leading-10 mt-8">Buy Me a Beer makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a beer) and leave a message.</p>

                <div className="relative w-[90%] flex items-center justify-center">

                    <div className="box w-1/2 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-4xl px-10 py-8 mt-24">
                        <div className="text-2xl font-bold">Buy Shreeraj a beer</div>
                        <div className="w-full flex items-center rounded-2xl bg-[#2f2d41] border-2 border-[#0d0d12] px-2.5 py-5 mt-8">
                            <Image
                                className="mx-8"
                                src="/beer_mug.png"
                                width={50}
                                height={50}
                                alt="beer mug pic"
                            />
                            <span className="text-slate-300 font-bold mr-8">X</span>
                            <span className="bg-[#0d0d12] px-5 py-3 text-lg rounded-full mx-2.5">1</span>
                            <span className="border-2 border-[#0d0d12] px-5 py-3 text-lg rounded-full mx-2.5">3</span>
                            <span className="border-2 border-[#0d0d12] px-5 py-3 text-lg rounded-full mx-2.5">5</span>
                        </div>
                        <div className="w-full flex items-center rounded-2xl bg-[#5b5570] border-2 border-[#0d0d12] px-4 pt-6 pb-20 text-lg mt-4">
                            <p>Say something nice...</p>
                        </div>
                        <div className="w-full bg-[#0d0d12] rounded-full text-lg text-center font-bold py-3.5 mt-4">Support ₹30</div>
                    </div>

                    <div className="tile-1 absolute left-0 bottom-48 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-3xl flex items-center gap-4 px-5 py-4 font-semibold">
                        <div className="bg-[#5b5570] rounded-full p-1">
                            <Image
                                src="/beer.png"
                                width={30}
                                height={30}
                                alt="beer pic"
                            />
                        </div>
                        <p>Akki bought 10 beers</p>
                    </div>

                    <div className="tile-2 absolute right-0 top-40 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-3xl flex flex-col items-center gap-4 px-5 py-4">
                        <div className="flex items-center gap-4 font-semibold">
                            <div className="bg-[#5b5570] rounded-full p-1">
                                <Image
                                    src="/beer.png"
                                    width={30}
                                    height={30}
                                    alt="beer pic"
                                />
                            </div>
                            <p>Sonu bought 25 beers</p>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <Image
                                src="/creator_thumbnail_6.png"
                                width={30}
                                height={30}
                                alt="creater-1 pic"
                            />
                            <p>Thanks Sonu!</p>
                        </div>
                    </div>

                    <div className="tile-3 absolute left-14 bottom-15 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-3xl flex flex-col items-center gap-4 px-5 py-4">
                        <div className="flex items-center gap-4 font-semibold">
                            <div className="bg-red-300 rounded-full p-1">
                                <Image
                                    src="/beer.png"
                                    width={30}
                                    height={30}
                                    alt="beer pic"
                                />
                            </div>
                            <p>Ritika bought a beers</p>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <Image
                                src="/creator_thumbnail_6.png"
                                width={30}
                                height={30}
                                alt="creater-1 pic"
                            />
                            <p>Thanks Ritika! <span className="text-red-500">&hearts;</span></p>
                        </div>
                    </div>

                    <div className="tile-4 absolute left-50 top-40 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-full p-4">
                        <Image
                            src="/heart.png"
                            width={30}
                            height={30}
                            alt="beer pic"
                        />
                    </div>

                    <div className="tile-5 absolute left-60 top-10 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-full text-2xl p-4">
                        <div>💯</div>
                    </div>

                    <div className="tile-6 absolute right-55 top-65 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-full text-2xl p-3">
                        <div>👋</div>
                    </div>
                </div>
            </div>

            <div className="section-3 container m-auto mt-20 bg-[#2f2d41] rounded-[50px] flex flex-col items-center justify-center p-14 w-[80%]">
                <div className="text-lg">Memberships</div>
                <h2 className="text-wrap text-6xl font-bold text-center leading-20">Start a membership for <br /> your biggest fans.</h2>
                <p className="text-2xl text-center px-48 leading-10 mt-8">Earn a recurring income by accepting monthly or yearly subscriptions. Share exclusive content, or just give them a way to support your work on an ongoing basis.</p>

                <div className="relative flex gap-20">
                    <div className="box-1 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-4xl px-10 py-8 mt-24">
                        <div className="w-65 h-90 flex flex-col items-center ">
                            <div className="relative w-full h-[40%] overflow-hidden">
                                <Image
                                    className="w-full object-contain"
                                    src="/membership_banner_1.png"
                                    fill
                                    alt="membership-banner"
                                />
                            </div>
                            <div className="font-bold mt-2">Basic membership</div>
                            <div className="text-xs mt-2">₹50 / month</div>

                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={20} className="invert" alt="tic svg" />
                                <p className="text-xs text-gray-200">3.3% OFF all my ebooks</p>
                            </div>
                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={20} className="invert" alt="tic svg" />
                                <p className="text-xs text-gray-200">Access to members-only page</p>
                            </div>
                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={20} className="invert" alt="tic svg" />
                                <p className="text-xs text-gray-200">Exclusive posts and messages</p>
                            </div>
                            <div className="w-full bg-[#0d0d12] rounded-full text-sm text-center font-bold py-3.5 mt-8">Join</div>
                        </div>
                    </div>

                    <div className="box-2 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-4xl px-10 py-8 mt-24">
                        <div className="w-65 h-90 flex flex-col items-center ">
                            <div className="relative w-full h-[40%] overflow-hidden">
                                <Image
                                    className="w-full object-contain"
                                    src="/membership_banner_3.png"
                                    fill
                                    alt="membership-banner"
                                />
                            </div>
                            <div className="font-bold mt-2">Advanced membership</div>
                            <div className="text-xs mt-2">₹250 / month</div>

                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={20} className="invert" alt="tic svg" />
                                <p className="text-xs text-gray-200">Highly private journal pages</p>
                            </div>
                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={20} className="invert" alt="tic svg" />
                                <p className="text-xs text-gray-200">Email alert for new posts</p>
                            </div>
                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={20} className="invert" alt="tic svg" />
                                <p className="text-xs text-gray-200">work in progress updates</p>
                            </div>
                            <div className="w-full bg-[#0d0d12] rounded-full text-sm text-center font-bold py-3.5 mt-8">Join</div>
                        </div>
                    </div>

                    <div className="box-3 absolute left-50 -top-5 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-4xl px-10 py-8 mt-24">
                        <div className="w-65 h-100 flex flex-col items-center ">
                            <div className="relative w-full h-[40%] overflow-hidden">
                                <Image
                                    className="w-full object-contain"
                                    src="/membership_banner_3.png"
                                    fill
                                    alt="membership-banner"
                                />
                            </div>
                            <div className="font-bold text-lg mt-2">Pro membership</div>
                            <div className="text-sm mt-2">₹150 / month</div>

                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={30} className="invert" alt="tic svg" />
                                <p className="text-sm text-gray-200">support me on a monthly basis</p>
                            </div>
                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={30} className="invert" alt="tic svg" />
                                <p className="text-sm text-gray-200">Email alert for new posts</p>
                            </div>
                            <div className="w-full flex items-center mt-2">
                                <img src="/tick.svg" width={30} className="invert" alt="tic svg" />
                                <p className="text-sm text-gray-200">Exclusive posts and messages</p>
                            </div>
                            <div className="w-full bg-[#0d0d12] rounded-full text-sm text-center font-bold py-3.5 mt-8">Join</div>
                        </div>
                    </div>

                    <div className="tile-1 absolute -right-50 top-60 bg-[#3b354f] border border-[#0d0d12] shadow-lg shadow-[#0d0d12] rounded-4xl px-6 py-6 flex items-center gap-5">

                        <Image
                            className="invert"
                            src={"/bank.svg"}
                            width={30}
                            height={30}
                            alt="bank svg"
                        />
                        <div>
                            <div className="text-xl font-bold">₹15,000</div>
                            <div className="">Earned this month</div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default HomeContent;