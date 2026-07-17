"use client"
import React, { useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    if (session) {
        return (
            <div>
                {/* Logged in as {session.user.name} */}
                <button onClick={() => { signOut() }}>Log out</button>
            </div>
        )
    }
}

export default Dashboard;
