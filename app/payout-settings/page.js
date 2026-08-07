"use client"
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const PayoutSetting = () => {
    const [proDropdown, setProDropdown] = useState()
    const { data: session } = useSession()

    return (
        <div className='flex w-full min-h-screen text-white'>
            <Sidebar currentPage={"payout"} />

            <div className="main w-full min-h-screen text-white pl-60 pt-10">

                <div className="m-auto w-180 text-2xl">Payout</div>

                {/* Box - 1 */}
                <div className="box1 bg-[#2f2d41] w-180 m-auto p-7 space-y-4 rounded-2xl mt-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="txet-gray-300">Outstanding balance</div>
                            <div className="text-3xl font-bold mt-2">₹0</div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <button className="bg-[#0d0d12] flex items-center gap-2 px-6 py-2.5 rounded-full cursor-pointer text-[14px] font-semibold ">
                                <span>Finish Onboarding</span>
                            </button>
                            <button className="border border-white rounded-full p-2 hover:bg-gray-700 cursor-pointer">
                                <Image
                                    className="invert"
                                    src={"./setting.svg"}
                                    height={20}
                                    width={20}
                                    alt={"setting-logo"}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Box - 2 */}
                <div className="box2 bg-[#2f2d41] w-180 m-auto p-10 space-y-4 rounded-2xl mt-4">
                    <div className="text-2xl">Payment history</div>
                    <div className="relative w-ful">

                        <table className="table-fixed border-separate border-spacing-y-2 w-full">
                            <thead >
                                <tr className="mb-10">
                                    <th className="text-start">Date</th>
                                    <th className="text-start">Amount</th>
                                    <th className="text-start">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-5">1 August 2026</td>
                                    <td className="pt-5">₹2000</td>
                                    <td className="pt-5">competed</td>
                                </tr>
                                <tr>
                                    <td className="pt-5">1 August 2026</td>
                                    <td className="pt-5">₹2000</td>
                                    <td className="pt-5">competed</td>
                                </tr>
                                <tr>
                                    <td className="pt-5">1 August 2026</td>
                                    <td className="pt-5">₹2000</td>
                                    <td className="pt-5">competed</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <div className="absolute w-full h-full top-0 bg-[#2f2d41b0] flex items-center justify-center">
                            <div className="bg-black px-5 py-3 rounded-full shadow-lg shadow-black">
                                <span className="text-sm">You haven’t received any payouts so far.</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* DropDown Menu */}
                <div className="absolute top-10 right-10">
                    <button className="flex items-center gap-2 text-sm p-2 px-4 bg-[#2f2d41] hover:bg-[#181921] rounded-full cursor-pointer shadow shadow-black" onClick={() => { setProDropdown(!proDropdown) }} aria-haspopup="menu" aria-expanded={proDropdown} onBlur={() => setProDropdown(false)}>
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
                        <Link href={`/${session?.user.username}`} target='_blank' className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">View my page</Link>
                        <Link href={"/dashboard"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Dashboard</Link>
                        <Link href={"#"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">My account</Link>
                        <Link href={"#"} className="hover:bg-[#3b354f] py-2 px-2 rounded-lg">Refer a creator</Link>
                        <button type="button" className="hover:bg-[#3b354f] py-2 px-2 rounded-lg text-start text-gray-300 cursor-pointer" onClick={() => { signOut() }}><span>Logout</span></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PayoutSetting;