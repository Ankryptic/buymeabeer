"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Radio, RadioGroup } from "@/context/RadioContext";
import Script from "next/script";
import { intitPayment } from "../action/UserAction";

const UserProfile = ({ showEdit, setShowEdit, userData }) => {
    const { data: session, status } = useSession()
    const [multiplier, setMultiplier] = useState(1)
    const isOwner = status === "authenticated" && session?.user.username === userData?.username;
    const [paymentForm, setPaymentForm] = useState({
        name: "",
        message: "",
    })
    const amount = 20 * multiplier;


    const handleCancel = () => {
        setShowEdit(false);
    }

    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    }

    const pay = async() => {
        let order = await intitPayment(amount, userData.username, paymentForm)
        console.log(order.id)

        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount * 100, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Buy Me A Beer", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url":`${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": paymentForm.name,
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    if (status === "loading") {
        return null
    }

    return <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
        <div className="main relative z-1 flex items-center justify-center w-full min-h-[72vh] text-white">

            {/* Cover Image */}
            <div className="absolute top-0 w-full -z-10 cover-pic flex items-center justify-center bg-red-300 h-50">
                <div className="absolute -z-9 w-full h-full">
                    <Image
                        className="object-cover"
                        src={"/blank_cover.png"}
                        fill
                        alt="cover-pic"
                    />
                </div>
                {isOwner && <div><label className="relative -top-5 z-1 flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-xl cursor-pointer" htmlFor="upload_cover">
                    <Image
                        className=""
                        src={"/image_icon.svg"}
                        height={16}
                        width={16}
                        alt="image-icon"
                    />
                    <span className="font-semibold text-sm">Add cover image</span>
                </label>
                    <input type="file" id="upload_cover" style={{ display: "none" }} /> </div>}
            </div>

            <div className="mt-30 w-full flex justify-center gap-2">

                <div className="box1 bg-[#2f2d41] rounded-3xl p-8 w-130 h-fit space-y-6">

                    <div className="flex items-center justify-between">
                        <span className="font-semibold">About {userData?.name.split(" ")[0]}</span>
                        {isOwner && <button type="buton" className="underline hover:no-underline text-sm cursor-pointer" onClick={() => setShowEdit(!showEdit)}>Edit</button>}
                    </div>

                    <div>
                        <span className="text-gray-300">{userData?.about}</span>
                    </div>

                    <hr className="text-gray-300" />

                    <div className="space-y-2">
                        <div className="text-lg font-bold">Recent supports</div>
                        <div className="bg-[#3b354f] text-red-500 h-35 rounded-xl flex flex-col items-center justify-center">
                            <span className="animate-heartbeat text-2xl">&hearts;</span>
                            <span className="text-sm">Be the first one to support Shreeraj.</span>
                        </div>
                    </div>

                </div>

                {!userData.setupPayout ? <div className="box2 bg-[#2f2d41] rounded-3xl p-8 w-130 h-fit space-y-6">

                    <div className="flex items-center justify-between">
                        <span className="font-semibold">Follow {userData?.name.split(" ")[0]}</span>
                    </div>

                    <div>
                        <input type="text" placeholder="Name or @yoursocial (optional)" className="w-full bg-[#3b354f] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />
                    </div>

                    <div>
                        <input type="text" placeholder="Enter your email" className="w-full bg-[#3b354f] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />
                    </div>

                    <div>
                        <button type="button" className="w-full bg-[#181921] hover:bg-[#222130] cursor-pointer px-4 py-4 rounded-full">Follow</button>
                    </div>

                </div> :

                    <div className="box3 bg-[#2f2d41] rounded-3xl p-8 w-120 h-fit space-y-4">
                        <div className="font-semisbold text-xl">Buy {userData.name} a beer</div>
                        <div className="w-full flex items-center rounded-2xl bg-[#2f2d41] border-2 border-[#0d0d12] px-2.5 py-4 mt-6">
                            <Image
                                className="mx-8"
                                src="/beer_mug.png"
                                width={40}
                                height={40}
                                alt="beer mug pic"
                            />
                            <span className="text-slate-300 font-bold mr-8">X</span>
                            <RadioGroup value={multiplier} onChange={(e) => setMultiplier(Number(e.target.value))}>
                                <div className="flex gap-3">
                                    <Radio value={1}>1</Radio>
                                    <Radio value={3}>3</Radio>
                                    <Radio value={5}>5</Radio>
                                </div>
                            </RadioGroup>
                            <input type="number" name="multiply" id="multiply" className="bg-[#3b354f] w-10 h-10 p-2 rounded-lg border-2 border-[#181921] ml-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                onChange={(e) => setMultiplier(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <input type="text" name="name" placeholder="Name or @yoursocial (optional)" className="w-full bg-[#3b354f] focus:bg-[#5b5570] px-4 py-4 rounded-xl" value={paymentForm.name} onChange={handleChange} />
                        </div>
                        <div>
                            <textarea name="message" id="message" placeholder="Say Something nice..." className="w-full h-32 resize-none bg-[#3b354f] focus:bg-[#5b5570] px-4 py-4 rounded-xl" value={paymentForm.message} onChange={handleChange} />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="monthly" id="monthly" className="" />
                            <label htmlFor="monthly" className="text-sm text-gray-400">Make this monthly</label>
                        </div>
                        <div>
                            <button type="button" className="w-full bg-[#181921] hover:bg-[#222130] cursor-pointer px-4 py-4 rounded-full" onClick={pay}>
                                <span>₹{amount}</span>
                            </button>
                        </div>

                    </div>}

            </div>

        </div>

        {/* Edit Section */}
        {showEdit && <div className="absolute w-full min-h-screen z-21 top-2 p-4 bg-[#000000c3] text-white">
            <div className="min-h-screen bg-[#3b354f] text-white rounded-2xl pb-20">

                <nav className="sticky top-0 z-22 flex items-center justify-between w-full h-20 bg-[#3b354f] border-b border-b-white px-10 rounded-t-2xl">
                    <div className="font-bold text-lg">Edit page</div>
                    <div className="btns flex items-center gap-4">
                        <button type="button" className="px-6 py-2 border-2 border-[#0d0d12] hover:bg-[#0d0d12] rounded-full cursor-pointer" onClick={handleCancel}>Cancel</button>
                        <button type="button" className="px-8 py-2 bg-[#181921] hover:bg-[#0d0d12] rounded-full">Save</button>
                    </div>
                </nav>

                <div className="main-inside-edit w-[38%] m-auto bg-red-90a0 space-y-4">

                    <div className="mt-5">Profile Photo</div>
                    <div className="flex gap-4">
                        <div className="relative w-25 h-25 rounded-xl overflow-hidden border-2 border-gray-300">
                            <Image
                                className="invert object-contain"
                                src={userData.profilePic || "/profile.svg"}
                                fill
                                alt="profile-photo"
                            />
                        </div>
                        <div className="mt-18">
                            <label htmlFor="profile-photo" className="px-4 py-2 border-2 border-[#0d0d12] hover:bg-[#0d0d12] rounded-full cursor-pointer">Upload</label>
                            <input type="file" id="profile-photo" style={{ display: "none" }} />
                        </div>
                    </div>

                    <hr />

                    <div className="mt-8">Full name</div>
                    <input type="text" defaultValue={userData.name} className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">What are you creating?</div>
                    <input type="text" placeholder="creating piano music, building Coronarelief.org, posting a new art everyday" className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">About me</div>
                    <input type="text" defaultValue={userData.about} className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">Featured video</div>
                    <input type="text" placeholder="Paste your Youtube link here" className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                    <hr />
                    <div className="mt-8">Social links</div>
                    <input type="text" defaultValue={userData.socialLink} className="w-full bg-[#222130] focus:bg-[#5b5570] px-4 py-4 rounded-xl" />

                </div>

            </div>

        </div>}
    </>
}


export default React.memo(UserProfile);