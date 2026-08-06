import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String},
    name: { type: String},
    profileCompleted: { type: Boolean, default: false },
    setupPayout: { type: Boolean, default: false },
    about: { type: String},
    socialLink: { type: String},
    profilePic: { type: String },
    coverPic: { type: String },
    country: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.User || mongoose.model("User", UserSchema);