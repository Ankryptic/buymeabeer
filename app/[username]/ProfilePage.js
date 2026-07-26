"use client"
import React, { useState } from "react";
import UserNav from "./UserNav";
import UserProfile from "./UserProfile";

const ProfilePage = ({ username }) => {
    const [showEdit, setShowEdit]= useState(false)

    return <>

        <UserNav username={username} setShowEdit={setShowEdit}/>

        <UserProfile
            showEdit={showEdit}
            setShowEdit={setShowEdit}
        />
    </>
}

export default React.memo(ProfilePage);