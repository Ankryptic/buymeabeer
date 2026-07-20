"use client"
import React from "react";
import Link from "next/link";

const Footer = ({color}) => {

    return (
        <footer className={`text-white bg-[${color}] pb-18 pt-14 flex items-center justify-around`}>
            <div className="text-lg font-light text-gray-300">&copy; Buy Me a Beer</div>
            <div className="flex items-center gap-8 font-semibold">
                <Link href={"/about"}>About</Link>
                <Link href={"/helpcenter"}>Help Center</Link>
                <div className="cursor-pointer flex items-center gap-1">
                    <span>Apps</span>
                    <img src="/upArrow.svg" alt="arrows svg" width={20} />
                </div>
                <div className="cursor-pointer flex items-center gap-1">
                    <span>Resources</span>
                    <img src="/upArrow.svg" alt="upArrow svg" width={20}/>
                </div>
                <Link href={"/privacy"}>Privacy</Link>
                <Link href={"/terms"}>Terms</Link>
            </div>
        </footer>
    )
}

export default React.memo(Footer);