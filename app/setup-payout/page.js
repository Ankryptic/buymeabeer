"use client"
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const countryList = [
    {
        country: "India",
    },
    {
        country: "Russia",
    },
    {
        country: "Indonesia",
    },
    {
        country: "Italy",
    },
    {
        country: "Japan",
    },
    {
        country: "France",
    },
    {
        country: "Brazil",
    },
    {
        country: "America",
    },
    {
        country: "Phillipiines",
    },
]

// Setup Payout
const SetupPayout = () => {
    const [option, setOption] = useState(false);
    const [country, setCountry] = useState("")
    const [searchRes, setSearchRes] = useState('')
    const searchInput = useRef(null)
    const [afterSkip, setAfterSkip] = useState(false)


    // Filters the Country List
    const query = searchRes.trim().toLowerCase()
    const filteredCountry = countryList.filter((val) => {
        return val.country.toLowerCase().includes(query);
    });


    const handleOption = () => {
        setOption(!option)
    }

    const handleSelect = (country) => {
        setCountry(country)
        setOption(false)
    }

    const handleInputFocus = () => {
        searchInput.current.focus()
    }

    const handleSkip = () => {
        setAfterSkip(true)
    }

    return (
        <div>
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
                    <div className="text-center text-3xl">Set up your payout method</div>

                    <div className="relative container mt-12 flex flex-col items-center justify-center gap-8 px-30">

                        <div className="flex items-center justify-between w-full border border-white px-4 py-3 rounded-xl cursor-pointer" onClick={handleOption} >
                            <div className="flex items-center gap-3">
                                <Image
                                    className="invert"
                                    src={"/globe.svg"}
                                    width={16}
                                    height={16}
                                    alt="globe"
                                />
                                <span>{country || "Choose your country"}</span>
                            </div>
                            <div>
                                <Image
                                    className={`${option ? "-rotate-180" : ""} transition-all duration-300`}
                                    src={"/downArrow.svg"}
                                    width={16}
                                    height={16}
                                    alt="arrow"
                                />
                            </div>
                        </div>

                        {/* Country Options DropDown */}
                        <div className={`absolute top-20 z-10 Countr-list w-135 rounded-2xl overflow-x-hidden overflow-y-auto scrollbar-none bg-[#3b354f] transition-all duration-300 ${option ? "opacity-100 h-100" : "opacity-0 h-0"} pb-10`} >

                            <div className="bg-[#3b354f] w-full sticky top-0 p-4">
                                <div className="flex bg-[#2f2d41] focus:bg-[#3b354f] text-white w-full rounded-xl px-4 py-4 cursor-text focus:outline-2 focus:outline-white" onClick={handleInputFocus}>
                                    <Image
                                        className="invert mr-2"
                                        src={"/search.svg"}
                                        width={20}
                                        height={20}
                                        alt="search logo"
                                    />
                                    <input ref={searchInput} type="text" placeholder="Search" className="w-full outline-none" value={searchRes} onChange={(e) => setSearchRes(e.target.value)} />
                                </div>
                            </div>

                            <div className="px-4 pb-8 h-[80%] overflow-x-hidden overflow-y-auto scrollbar-none">
                                {filteredCountry.map((val, idx) => {
                                    return <div key={idx} className="py-2 px-4 rounded-xl cursor-pointer hover:bg-[#5b5570]"
                                        onClick={() => { handleSelect(val.country) }}
                                    >{val.country}</div>
                                })}

                            </div>
                        </div>

                        {country && <div className="flex gap-2 bg-[#2f2d41] p-4 rounded-xl">
                            <Image
                                className="bg-green-600 rounded-full h-fit mt-1"
                                src={"/tick.svg"}
                                width={14}
                                height={14}
                                alt="tick-logo"
                            />
                            <div className="text-sm">Good news - we support bank deposits in the {country}, thanks to our partner.</div>
                        </div>}

                        {country && <div className="w-full flex items-center justify-end">
                            <Link href={"/setup-payout"} className="text-center w-full cursor-pointer bg-[#181921] hover:bg-[#0d0d12] py-4 px-12 rounded-full">Connect</Link>
                        </div>}

                        <div className="flex">
                            <Image
                                className="h-fit"
                                src={"/thunder.svg"}
                                width={24}
                                height={24}
                                alt="thunder"
                            />
                            <p className="text-sm text-gray-300"><span className="text-white font-bold">Takes less than 3 mins:</span> you’ll be redirected to Stripe to create your account and enter your bank details so we can send you payments. And don’t worry, we never store your personal or bank details.</p>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Pop-up after skip  */}
           {afterSkip && <div className="fixed top-0 z-20 h-screen w-full flex items-center justify-center bg-[#0000006a] text-white">

                <div className="pop-box bg-[#2f2d41] w-120 h-80 py-4 px-6 rounded-xl shadow-2xl shadow-black">
                    <div className="flex justify-between">
                        <div className="relative">
                            <Image
                                className="invert"
                                src={"/rupee.svg"}
                                width={60}
                                height={60}
                                alt="rupee-logo"
                            />
                            <Image
                                className="invert absolute right-1 bottom-1"
                                src={"/danger.svg"}
                                width={24}
                                height={24}
                                alt="danger-logo"
                            />
                        </div>
                        <div className="text-white text-xl h-fit cursor-pointer hover:text-red-600" onClick={() => setAfterSkip(false)}>&#10008;</div>
                    </div>

                    <h2 className="text-2xl font-bold mt-6">Before you continue...</h2>
                    <h4 className="text-gray-300 mt-2">Your page won't be able to accept payment until you connect a payout method. You can still setup your page and publish posts.</h4>

                    <div className="buttons flex items-center my-6 gap-2">
                        <button className="text-center text-sm w-full cursor-pointer bg-[#181921] hover:bg-[#0d0d12] py-4 px-12 rounded-full" onClick={() => setAfterSkip(false)}>Connect</button>
                        <Link href={"/"} className="text-center text-sm w-full cursor-pointer bg-[#5b5570] hover:bg-[#3b354f] py-4 px-6 rounded-full">Got it! I'll do this later</Link>
                    </div>
                </div>

            </div>}

            <div className="section-2 absolute bottom-0 h-26 w-full ">
                <div className="bar w-full flex gap-3">
                    <div className="bar-1 h-1 w-full bg-white"></div>
                    <div className="bar-1 h-1 w-full bg-white"></div>
                    <div className="bar-1 h-1 w-full bg-black"></div>
                </div>
                <div className="w-full flex items-center justify-end my-5 pr-15">
                    <button className="text-center text-white cursor-pointer underline hover:no-underline my-4 mr-4" onClick={handleSkip}>Skip this setup</button>
                </div>
            </div>
        </div>
    )
}

export default SetupPayout;