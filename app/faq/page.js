"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Link from "next/link";

const faq = [
    {
        ques: "Who uses Buy Me a Beer?",
        ans: "Anyone with an audience. Youtubers, musicians, podcasters, writers, programmers, nonprofits, cosplayers, you name it. More than 2 million creators and their supporters are on Buy Me a Beer."
    },
    {
        ques: "How do I get paid?",
        ans: "You get paid to your local bank account. We currently offer bank deposits to creators from over 110 countries."
    },
    {
        ques: "How can my audience pay?",
        ans: "We support all major credit and debit cards, Apple Pay, Google Pay, Cash App and other global payment methods."
    },
    {
        ques: "Is there a fee to use Buy Me a Beer?",
        ans: "We do not charge a monthly fee. All features including publishing and emails are free for everyone. We charge a 5% transaction fee, and creators keep 95% of the earnings. We make money only when you do. We'll never show ads and we'll never sell your data"
    },
    {
        ques: "Is Buy Me a Beer safe and reliable?",
        ans: <div><div className="mb-2">We take security seriously. Here are some measures we’ve taken to protect your and your supporter’s data.</div>
            <ul className="list-disc p-4">
                <li>We don’t store credit card data on our servers. Payment processing is handled by Stripe (PCI Compliance Level 1) and Wise.</li>
                <li>We run on the robust Amazon infrastructure. Cloudflare adds an additional layer of security. We also take periodic backups and force SSL encryption across the platform.</li>
                <li>We have a bug bounty program to encourage responsible reporting of any security issues, and we’re quick to take action.</li>
            </ul>
            </div>
    },
    {
        ques: "Do I have complete ownership of my supporters?",
        ans: "Yes, your supporters are strictly yours. We do not email them. You can export their list any time you like."
    },
    {
        ques: "How is this different from other platforms for creators?",
        ans: "With Buy Me a Beer, you get everything you need to run your creative business. You don't have to worry about paying for and stitching together a dozen services, from sending emails to charging for subscriptions. Besides, your Buy Me a Beer page is arguably the most delightful experience you can offer your audience. From the one-tap payment (look ma, no sign-ups required!) to the delightful little touches for your supporters, we’ve obsessed over every bit of detail."
    },
    {
        ques: "Can I build a serious business using Buy Me a Beer?",
        ans: "Yes, there are many creators earning a six-figure income on Buy Me a Beer. We will grow with you."
    },
    {
        ques: "Who are you folks?",
        ans: "Buy Me a Beer is one of the leading creator economy companies in the world. It was founded in the UK in 2017 by a team of creators who turned their passion into a platform. Buy Me a Beer is backed by Y Combinator and Stripe. Read more about us and our guiding values."
    },
    {
        ques: "How do I contact Buy Me a Beer?",
        ans: "You can email us at support@buymeaBeer.com, or leave us a message on the Intercom chat. We also respond to every feature request submitted."
    },
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

    return <>
        <Navbar />
        <div className="main min-h-[70vh] text-white w-full bg-[#181921]">

            <div className="section-1 w-1/2 m-auto text-center">
                <h1 className="font-playwrite pt-30 text-3xl font-bold">Frequently Asked Questions</h1>
                <h3 className="mt-8 text-xl">If you can't find an answer that you're looking for, feel free to drop us a line.</h3>
                <div className="mt-8 h-12 flex items-center justify-center gap-x-4">
                    <Link href={"/"} className="w-44">
                        <span className="font-semibold border border-white rounded-full hover:p-2.5 p-2">About the company</span>
                    </Link>
                    <Link href={"/"} className="w-38">
                        <span className="font-semibold border border-white rounded-full hover:p-2.5 p-2">Contact support</span>
                    </Link>
                    <Link href={"/"} className="w-37">
                        <span className="font-semibold border border-white rounded-full hover:p-2.5 p-2">Visit help center</span>
                    </Link>
                </div>
            </div>

            <div className="section-2 w-1/2 m-auto mt-18 px-20 space-y-4">

                {faq.map((faq, index) => {
                    return (
                        <div key={index} className="tile-1 w-full bg-[#2f2d41] px-7 py-5 rounded-2xl" onClick={() => { setOpenIndex(openIndex === index ? null : index) }}>
                            <div className="title flex items-center justify-between cursor-pointer">
                                <h2 className="text-[20px]">{faq.ques}</h2>
                                <img width={20} src={openIndex === index ? "/upArrow.svg" : "/downArrow.svg"} alt="arrow" />
                            </div>
                            <div className={`text-gray-300 overflow-hidden transition-all duration-300 
                                ${openIndex === index ? "mt-4 opacity-100 max-h-80" : "max-h-0 opacity-0"}`}>
                                {faq.ans}
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
        <Footer color={"#181921"}/>
    </>
}
export default Faq;