"use client"
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react';

const Sidebar = ({ currentPage }) => {
    const [publish, setPublish] = useState(false);
    const { data: session } = useSession();
    
    return <div className="fixed top-0 overflow-y-auto overflow-x-hidden scrollbar-none sidebar w-[16%] h-screen bg-[#2f2d41] px-4 space-y-1 text-white">
    
                        <div className="sideNav sticky top-0 h-17">
                            <div className="logo">
                                <Link href={`/dashboard`}>
                                    <Image
                                        src={"/cheers_noBG.gif"}
                                        width={60}
                                        height={60}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                        </div>
    
                        <Link href={"/dashboard"} className={`flex w-full ${currentPage === "home" ? "bg-[#5b5570]" : ""} hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer`}>
                            <span>Home</span>
                        </Link>
                        <Link href={`/${session?.user.username}`} target='_blank' className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
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
                        <Link href={"/payout-settings"} className={`flex w-full ${currentPage === "payout" ? "bg-[#5b5570]" : ""} hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer`}>
                            <span>Payout</span>
                        </Link>
                        <Link href={"#"} className='flex w-full hover:bg-[#5b5570] py-3 px-5 rounded-xl text-sm font-light cursor-pointer'>
                            <span>Settings</span>
                        </Link>
    
                    </div>
}
export default Sidebar;