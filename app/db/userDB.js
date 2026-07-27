import mongoose from "mongoose";

const UserDb = async() => {
    await mongoose.connect('mongodb://localhost:27017/beer')
}

export default UserDb;