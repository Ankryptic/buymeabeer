
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserNav from "./UserNav";

const Username = async ({ params }) => {
    const { username } = await params;

    return (
        <div>
            <UserNav username={username}/>
        </div>
    )
}

export default Username;