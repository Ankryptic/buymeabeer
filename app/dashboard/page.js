"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Dashboard = () => {
    const [publish, setPublish] = useState(false);

    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    if (session) {
        const username = session.user.name.toLowerCase().trim().replace(/\s+/g, "")

        return (
            <div className='flex w-full min-h-screen text-white'>
                {/* Side Bar */}
                <div className="fixed top-0 overflow-y-auto overflow-x-hidden scrollbar-none sidebar w-[16%] h-screen bg-[#2f2d41] px-4 space-y-1">

                    <div className="sideNav sticky top-0 h-17">
                        <div className="logo">
                            <Link href={"/"}>
                                <Image
                                    src={"/cheers_noBG.gif"}
                                    width={60}
                                    height={60}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className='bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"/dashboard"}>Home</Link>
                    </div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={`/${username}`} target='_blank'>View page</Link>
                    </div>

                    <div className='text-[10px] tracking-[1px] text-gray-300 ml-2 mt-5'>MONETIZE</div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"#"}>Supporters</Link>
                    </div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"#"}>Memberships</Link>
                    </div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"#"}>Shop</Link>
                    </div>

                    <div className='publish flex items-center justify-between hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer' onClick={() => {setPublish(!publish)}}>
                        <span>Publish</span>
                        <img src="/downArrow.svg" alt="arrow-icon" width={16} className={`transition-all duration-400 ${publish ? "-rotate-180" : ""}`}/>
                    </div>
                    <div className={`publish-dropdown overflow-hidden transition-all duration-400 ${publish ? 
                                    "opacity-100 max-h-30" :
                                     "opacity-0 max-h-0"}`}>
                        <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                            <Link href={"#"}>Posts</Link>
                        </div>
                        <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                            <Link href={"#"}>Gallery</Link>
                        </div>
                        <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                            <Link href={"#"}>Messages</Link>
                        </div>
                    </div>

                    <div className='text-[10px] tracking-[1px] text-gray-300 ml-2 mt-5'>SETTINGS</div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"#"}>Buttons & Graphics</Link>
                    </div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"#"}>Integration</Link>
                    </div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"#"}>Payout</Link>
                    </div>
                    <div className='hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <Link href={"#"}>Settings</Link>
                    </div>

                </div>

                {/* Main Screen  */}
                <div className="main w-full min-h-screen">

                </div>
            </div>
        )
    }
}

export default Dashboard;
