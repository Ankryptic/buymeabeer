"use client"
import React, { useRef, useState } from "react";
import Link from "next/link";

const resLinks = [
    "Feature request",
    "Buttons",
    "QR Code",
    "Stream alerts",
    "Patreon comparison",
    "Kickstarter comparison",
    "Ghost comparison",
    "Memberful comparison",
    "Teachable comparison",
    "Security Policy"
]

const Footer = ({ color }) => {

    const [appDd, setAppDd] = useState(false)
    const appImgRef = useRef(null)

    const [resDd, setResDd] = useState(false)
    const resImgRef = useRef(null)

    const handleAppDd = () => {
        if (!appDd) appImgRef.current.style = "transform: rotate(180deg)";
        else appImgRef.current.style = "transform: rotate(0)"

        setAppDd(!appDd)

    }

    const handleResDd = () => {
        if (!resDd) resImgRef.current.style = "transform: rotate(180deg)";
        else resImgRef.current.style = "transform: rotate(0deg)";
        setResDd(!resDd)
    }

    return (
        <footer className={`text-white bg-[${color}] pb-18 pt-14 flex items-center justify-around`}>
            <div className="text-lg font-light text-gray-300">&copy; Buy Me a Beer</div>
            <div className="flex items-center gap-8 font-semibold">
                <Link href={"/about"} className="hover:text-gray-300">About</Link>
                <Link href={"/helpcenter"} className="hover:text-gray-300">Help Center</Link>

                <div className="app-dd relative">
                    <div className={`absolute bottom-10 flex flex-col bg-[#2f2d41] shadow shadow-black rounded-xl overflow-hidden transition-all duration-300
                    ${appDd ? "max-h-40 opacity-100 py-3 px-4" :
                            "max-h-0 opacity-0 p-0"
                        }`}>
                        <span className={`cursor-pointer hover:bg-[#3b354f] px-6 py-2 rounded-xl`}>iOS</span>
                        <span className={`cursor-pointer hover:bg-[#3b354f] px-6 py-2 rounded-xl`}>Android</span>
                    </div>
                    <div className="cursor-pointer flex items-center gap-1 hover:text-gray-300" onClick={handleAppDd} onBlur={() => setAppDd(false)}>
                        <span>Apps</span>
                        <img
                            className="transition-all duration-200"
                            ref={appImgRef}
                            src="/upArrow.svg"
                            alt="arrows svg"
                            width={20} />
                    </div>
                </div>

                <div className="res-dd relative">
                    <div className={`absolute bottom-10 flex flex-col bg-[#2f2d41] shadow shadow-black rounded-xl overflow-hidden transition-all duration-300 w-70
                    ${resDd ? "max-h-200 opacity-100 py-3 px-4" :
                            "max-h-0 opacity-0 p-0"
                        }`}>
                        {resLinks.map(link => (
                            <span key={link} className={`cursor-pointer hover:bg-[#3b354f] px-6 py-2 rounded-xl`}>{link}</span>
                        ))}
                    </div>
                    <div className="cursor-pointer flex items-center gap-1 hover:text-gray-300" onClick={handleResDd} onBlur={() => setResDd(false)}>
                        <span>Resources</span>
                        <img
                            className="transition-all duration-200"
                            ref={resImgRef}
                            src="/upArrow.svg"
                            alt="upArrow svg"
                            width={20} />
                    </div>
                </div>

                <Link href={"/privacy"} className="hover:text-gray-300">Privacy</Link>
                <Link href={"/terms"} className="hover:text-gray-300">Terms</Link>
            </div>
        </footer>
    )
}

export default React.memo(Footer);