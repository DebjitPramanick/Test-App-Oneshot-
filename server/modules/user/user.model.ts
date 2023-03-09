import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    profile_pic: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: true,
        require: false
    }
}, {timestamps: true})

const User = mongoose.model("user", UserSchema)

export default User