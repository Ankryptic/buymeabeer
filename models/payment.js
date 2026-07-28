import mongoose from "mongoose";

const { Schema } = mongoose;

const paymentSchema = new Schema({
    name: { type: String, required: true},
    to_username: { type: String, required: true },
    Oid: { type: String, required: true },
    message: { type: String, required: true },
    amount: { type: String },
    CreatedAt: { type: Date, defualt: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, defualt: false }
})

export default mongoose.model.Payment || mongoose.model("Payment", paymentSchema)