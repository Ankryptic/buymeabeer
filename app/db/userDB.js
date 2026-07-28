import mongoose from "mongoose";

const UserDb = async() => {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect('mongodb://localhost:27017/beer')
}

export default UserDb;