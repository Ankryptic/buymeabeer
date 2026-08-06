"use client"
import React, { useState } from "react";
import UserNav from "./UserNav";
import UserProfile from "./UserProfile";

const ProfilePage = ({ username , userData}) => {
    const [showEdit, setShowEdit]= useState(false)
    console.log(userData)

    return <>

        <UserNav username={username} setShowEdit={setShowEdit} userData={userData}/>

        <UserProfile
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            userData={userData}
        />
    </>
}

export default React.memo(ProfilePage);