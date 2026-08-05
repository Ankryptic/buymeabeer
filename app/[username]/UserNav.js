"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";


const UserNav = ({ username, setShowEdit }) => {
    const [proDropdown, setProDropdown] = useState(false);
    const { data: session, status } = useSession()
    const [authenticated, setAuthenticated] = useState(true)
    const [dotDropdown, setDotDropdown] = useState(false)
    const profilePic  = session?.user.image
    const name = session?.user.name
    

    useEffect(() => {
        if (status === "unauthenticated") {
            console.log("unathenticateds")
            setAuthenticated(false)
        }
    }, [status, session])

    return (
        <nav className="flex items-center justify-between w-full h-18 px-6 bg-[#181921] text-white">

            <div className="flex items-center gap-5">
                <div className="relative user-image w-12 h-12 border border-white overflow-hidden rounded-lg">
                    <Image
                        className="object-contain"
                        src={profilePic || "/profile.svg"}
                        width={50}
                        height={50}
                        alt="profile-logo"
                    />
                </div>
                <div className="username font-bold text-lg">{name}</div>
                {/* <div className="username font-bold text-lg">{ username }</div> */}
            </div>

            {authenticated && <div className="flex items-center gap-3">
                <button className="p-2 border border-[#5b5570] hover:bg-[#5b5570] rounded-full cursor-pointer">
                    <Image
                        className="invert"
                        src={"/upload.svg"}
                        width={14}
                        height={14}
                        alt="upload-logo"
                    />
                </button>
                <button className="text-sm p-2 px-4 border border-[#5b5570] hover:bg-[#5b5570] rounded-full cursor-pointer" onClick={() => setShowEdit(true)}>
                    <span>Edit page</span>
                </button>
                <button className="text-sm p-2 px-4 border border-[#5b5570] bg-[#2f2d41] hover:bg-[#181921] rounded-full cursor-pointer">
                    <span>+ </span>
                    <span>Create</span>
                </button>

                <div className="relative">
                    <button className="flex items-center gap-2 text-sm p-2 px-4 border border-[#5b5570] hover:bg-[#5b5570] rounded-full cursor-pointer" onClick={() => { setProDropdown(!proDropdown) }} aria-haspopup="menu" aria-expanded={proDropdown} onBlur={() => setProDropdown(false)}>
                        <span>&#9776;</span>
                        <Image
                            className="rounded-full"
                            src={session?.user.image || "/profile.svg"}
                            width={20}
                            height={20}
                            alt="profile-logo"
                        />
                    </button>

                    <div className={`absolute z-15 right-2 top-12 bg-[#5b5570] shadow shadow-black flex flex-col w-50 rounded-sm text-sm  transition-all duration-300 overflow-hidden
                            ${proDropdown ? "opacity-100 p-4 max-h-80" :
                            "opacity-0 max-h-0 p-0"
                        }
                        `}>
                        <Link href={`/${username}`} target="_blank" className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">View my page</Link>
                        <Link href={"/dashboard"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Dashboard</Link>
                        <Link href={"#"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">My account</Link>
                        <Link href={"#"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Refer a creator</Link>
                        <button className="hover:bg-[#3b354f] w-full py-2 px-2 rounded-lg text-start text-gray-300 cursor-pointer" onClick={() => signOut()}><span>Logout</span></button>
                    </div>
                </div>

            </div>}

            {!authenticated && <div className="flex items-center gap-6 pr-2">
                <div className="relative">
                    <button className="cursor-pointer hover:bg-gray-700 px-2 py-1 rounded-full" 
                        onClick={() => {setDotDropdown(!dotDropdown)}} aria-haspopup="menu" aria-expanded={dotDropdown} onBlur={() => {setDotDropdown(false)}} 
                    >
                        <span>&bull;</span>
                        <span>&bull;</span>
                        <span>&bull;</span>
                    </button>

                    {/* Logged Out DropDown */}
                    <div className={`absolute right-0 top-10 z-15 bg-[#5b5570] shadow shadow-black flex flex-col w-40 rounded-lg text-sm overflow-hidden transition-all duration-300
                        ${dotDropdown ? "opacity-100 max-h-40 p-2" : 
                                        "opacity-0 max-h-0 p-0"
                        }
                        `}>
                        <Link href={"#"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Follow</Link>
                        <Link href={"#"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Share</Link>
                        <Link href={"#"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Report</Link>
                    </div>
                </div>

                <Link href={"/login"} className="hover:underline text-sm">
                    Login
                </Link>
            </div>
}
        </nav>
    )
}

export default React.memo(UserNav);