import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import ConnectDB from "@/app/db/ConnectDB";
import Payment from "@/models/Payment";

export const POST = async (req) => {
    await ConnectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // check for order id in database
    const p = await Payment.findOne({ Oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: "false", message: "Order Id not Found!"})
    }

    // Verify the Payment using signature
    let verify = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, process.env.RAZORPAY_SECRET);

    if(verify){
        let updatedPayment = await Payment.findOneAndUpdate({ Oid: body.razorpay_order_id}, { done: true }, { new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_username}?paymentDone=true`)
    }

    NextResponse.json({ success: "false", message: "Payment Verification failed!"})
}