import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfilePage from "./ProfilePage";
import { getUserData } from "../action/UserAction";

const Username = async ({ params }) => {
    const { username } = await params;
    const userData = await getUserData(username)

    return (
        <div className="relative h-screen">

            <ProfilePage username={username} userData={userData} />

            <footer className="absolute w-full bottom-0 h-22 flex flex-col items-center gap-3">
                <div className="text-gray-300 flex items-center justify-center gap-5">
                    <button type="button" className="flex items-center gap-2 hover:underline">
                        <Image
                            className="invert"
                            src={"/globe.svg"}
                            width={14}
                            height={14}
                            alt="globe-logo"
                        />
                        <span>English</span>
                    </button>
                    <Link href={"#"} className="hover:underline">Privacy</Link>
                    <Link href={"#"} className="hover:underline">Terms</Link>
                    <Link href={"#"} className="hover:underline">Report</Link>
                </div>
                <div>
                    <Link href={"/"} target="_blank" className="group flex items-center">
                        <span className="bg-linear-to-r from-orange-500 to-gray-300 bg-clip-text text-transparent text-sm font-bold">Start your Buy Me a Beer page</span>
                        <svg data-v-649a954c="" data-v-da4783f8="" viewBox="0 0 6 9" fill="" xmlns="http://www.w3.org/2000/svg" className="w-2 overflow-visible transition duration-100 ease-in-out ml-1.5 mt-0.5" aria-hidden="true"><g data-v-649a954c="" className="translate-x-0 transform duration-100 ease-in-out group-hover:translate-x-[1.7px]"><path data-v-649a954c="" d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="#D1D5DB" strokeWidth="2"></path></g><g data-v-649a954c="" className="tw-svg-arrow-body opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-x-150"><path data-v-649a954c="" d="M3.5 4.5H0" stroke="#D1D5DB" strokeWidth="2"></path></g></svg>
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Username;