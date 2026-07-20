import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

const Reviews = () => {
    return <>
        <Navbar />
        <div className="main w-full min-h-[75vh] bg-[#181921] text-white">

            <div className="section-1 w-full mt-24">
                <div className="w-1/2 m-auto flex items-center justify-center gap-5">
                    <h1 className="font-playwrite text-5xl">Wall of</h1>
                    <Image
                        className="animate-heartbeat"
                        src={"/heart.png"}
                        width={100}
                        height={100}
                        alt= "heart"
                    />
                </div>
                <div className="para w-1/2 m-auto text-center text-2xl mt-10">
                    Buy Me a Beer has been around since 2026, so about first years. We’ve been lucky enough to serve over 2 million creators. Want to mention in your use the hash tag and get chance to feature in our website page. Want to get listed here? Share your experience with the hashtag #buymeabeer
                </div>
            </div>

        </div>

        <Footer color={"#181921"} />
    </>
}

export default Reviews;