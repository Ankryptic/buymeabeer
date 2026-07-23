"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const UserNav = ({username}) => {
    const [proDropdown, setProDropdown] = useState(false);
    

    return (
        <nav className="flex items-center justify-between w-full h-18 px-6 bg-[#181921] text-white">

                <div className="flex items-center gap-5">
                    <div className="relative user-image w-12 h-12 border border-white rounded-lg">
                        <Image
                            className="object-contain invert"
                            src={"/profile.svg"}
                            fill
                            alt="profile-logo"
                        />
                    </div>
                    <div className="username font-bold text-lg">Shreeraj</div>
                    {/* <div className="username font-bold text-lg">{ username }</div> */}
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 border border-[#5b5570] hover:bg-[#5b5570] rounded-full cursor-pointer">
                        <Image
                            className="invert"
                            src={"/upload.svg"}
                            width={14}
                            height={14}
                            alt="upload-logo"
                        />
                    </button>
                    <button className="text-sm p-2 px-4 border border-[#5b5570] hover:bg-[#5b5570] rounded-full cursor-pointer">
                        <span>Edit page</span>
                    </button>
                    <button className="text-sm p-2 px-4 border border-[#5b5570] bg-[#2f2d41] hover:bg-[#181921] rounded-full cursor-pointer">
                        <span>+ </span>
                        <span>Create</span>
                    </button>

                    <div className="relative">
                        <button className="flex items-center gap-2 text-sm p-2 px-4 border border-[#5b5570] hover:bg-[#5b5570] rounded-full cursor-pointer" onClick={() => {setProDropdown(!proDropdown)}} aria-haspopup="menu" aria-expanded={proDropdown} onBlur={() => setProDropdown(false)}>
                            <span>&#9776;</span>
                            <Image
                                className="invert"
                                src={"/profile.svg"}
                                width={20}
                                height={20}
                                alt="profile-logo"
                            />
                        </button>

                        <div className={`absolute right-2 top-12 bg-[#5b5570] shadow shadow-black flex flex-col w-50 rounded-sm text-sm  transition-all duration-300 overflow-hidden
                            ${proDropdown ? "opacity-100 p-4 max-h-50" :
                                "opacity-0 max-h-0 p-0"
                            }
                        `}>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">View my page</Link>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Dashboard</Link>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">My account</Link>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Refer a creator</Link>
                            <button type="button" className="hover:bg-[#3b354f] py-2 px-2 rounded-lg text-start text-gray-300 cursor-pointer"><span>Logout</span></button>
                        </div>
                    </div>

                </div>
                
            </nav>
    )
}

export default React.memo(UserNav);