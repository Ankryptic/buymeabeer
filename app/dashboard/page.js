"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Dashboard = () => {
    const [publish, setPublish] = useState(false);
    const [proDropdown, setProDropdown] = useState(false)

    const { data: session, status } = useSession();
    const router = useRouter();     

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router]);

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

                    <Link href={"/dashboard"} className='flex w-full bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Home</span>
                    </Link>
                    <Link href={`/${username}`} target='_blank' className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>View page</span>
                    </Link>

                    <div className='text-[10px] tracking-[1px] text-gray-300 ml-2 mt-5'>MONETIZE</div>
                    <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Suppoters</span>
                    </Link>
                    <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Memberships</span>
                    </Link>
                    <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Shops</span>
                    </Link>

                    <div className='publish flex items-center justify-between hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer' onClick={() => { setPublish(!publish) }}>
                        <span>Publish</span>
                        <img src="/downArrow.svg" alt="arrow-icon" width={16} className={`transition-all duration-400 ${publish ? "-rotate-180" : ""}`} />
                    </div>
                    <div className={`publish-dropdown overflow-hidden transition-all duration-400 ${publish ?
                        "opacity-100 max-h-40" :
                        "opacity-0 max-h-0"}`}>
                        <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Posts</span>
                    </Link>
                        <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Gallery</span>
                    </Link>
                        <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Messages</span>
                    </Link>
                    </div>

                    <div className='text-[10px] tracking-[1px] text-gray-300 ml-2 mt-5'>SETTINGS</div>
                    <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Buttons & Graphics</span>
                    </Link>
                    <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Integration</span>
                    </Link>
                    <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Payout</span>
                    </Link>
                    <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                        <span>Settings</span>
                    </Link>

                </div>

                {/* Main Screen  */}
                <div className="main w-full min-h-screen text-white pl-60 pt-10">

                    <div className="box1 bg-[#2f2d41] w-180 m-auto p-10 space-y-4 rounded-2xl">

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-6'>
                                <Image
                                    className='invert'
                                    src={"/profile.svg"}
                                    width={70}
                                    height={70}
                                    alt="profile-photo"
                                />
                                <div className='flex flex-col gap-1'>
                                    <span className='font-semibold'>Hi, Shreeraj</span>
                                    <Link href={"https://buymeabeer.com/Shreeraj"}><span className='text-gray-300'>buymeabeer.com/Shreeraj</span></Link>
                                </div>
                            </div>

                            <button type="button" className='bg-[#0d0d12] flex items-center gap-2 px-6 py-2.5 rounded-full cursor-pointer'>
                                <Image
                                    className='invert'
                                    src={"/upload.svg"}
                                    height={16}
                                    width={16}
                                    alt="upload-icon"
                                />
                                <span className='text-sm'>Share page</span>
                            </button>
                        </div>

                        <hr className='text-gray-600'/>

                        <div className='flex items-center gap-5 mt-8'>
                            <div className='text-2xl tracking-[1px]'>Earnings</div>
                            <button type='button' className='border border-gray-400 rounded-full px-4 py-2 flex items-center gap-1'>
                                <span className='text-gray-300 text-[12px] font-light'>Last 30 Days</span>
                                <img src="/downArrow.svg" alt="arrow-icon" width={14}/>
                            </button>
                        </div>

                        <div className='font-bold text-5xl'>
                            <span>₹</span>
                            <span>0</span>
                        </div>

                        <div className='flex items-center gap-10'>

                            <div className='text-sm flex items-center gap-2'>
                                <div className='h-3 w-3 bg-orange-300 rounded-[3px]'></div>
                                <div>₹0 <span className='text-gray-400'>Supporters</span></div>
                            </div>

                            <div className='text-sm flex items-center gap-2'>
                                <div className='h-3 w-3 bg-pink-300 rounded-[3px]'></div>
                                <div>₹0 <span className='text-gray-400'>Membership</span></div>
                            </div>

                            <div className='text-sm flex items-center gap-2'>
                                <div className='h-3 w-3 bg-cyan-300 rounded-[3px]'></div>
                                <div>₹0 <span className='text-gray-400'>Shop</span></div>
                            </div>

                        </div>

                    </div>

                    {/* DropDown Menu */}
                    <div className="absolute top-10 right-10">
                        <button className="flex items-center gap-2 text-sm p-2 px-4 bg-[#2f2d41] hover:bg-[#181921] rounded-full cursor-pointer shadow shadow-black" onClick={() => {setProDropdown(!proDropdown)}} aria-haspopup="menu" aria-expanded={proDropdown} onBlur={() => setProDropdown(true)}>
                            <span className="text-xl">&#9776;</span>
                            <Image
                                className="invert"
                                src={"/profile.svg"}
                                width={24}
                                height={24}
                                alt="profile-logo"
                            />
                        </button>

                        <div className={`absolute z-15 right-2 top-12 bg-[#2f2d41] shadow shadow-black flex flex-col w-50 rounded-sm text-sm  transition-all duration-300 overflow-hidden
                            ${proDropdown ? "opacity-100 p-4 max-h-60" :
                                "opacity-0 max-h-0 p-0"
                            }
                        `}>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">View my page</Link>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Dashboard</Link>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">My account</Link>
                            <Link href={"/"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Refer a creator</Link>
                            <button type="button" className="hover:bg-[#3b354f] py-2 px-2 rounded-lg text-start text-gray-300 cursor-pointer" onClick={() => {signOut()}}><span>Logout</span></button>
                        </div>
                    </div>

                    <footer className='fixed bottom-0 w-full h-20 pl-70'>
                        <div className='flex items-center gap-8'>
                            <Link href={"/help"} className='hover:underline text-gray-300'>Help Center</Link>
                            <Link href={"/#"} className='hover:underline text-gray-300'>FAQ</Link>
                            <Link href={"/#"} className='hover:underline text-gray-300'>Contact</Link>
                            <Link href={"/#"} className='hover:underline text-gray-300'>Refer a Creator</Link>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Dashboard;
