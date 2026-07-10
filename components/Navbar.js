import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="font-gooflex text-white">
            <div>
                <Link href={"/"}><span>FAQ</span></Link>
                <Link href={"/"}><span>Wall of &hearts;</span></Link>
            </div>

            <div className="logo">
                <Image
                    src="/cheers_noBG.gif"
                    width={100}
                    height={100}
                    alt="Picture of the beer"
                />
                <span className="font-playwrite text-lg">Buy me a beer</span>
            </div>

            <div>
                Link
            </div>
        </nav>
    )
}

export default Navbar;