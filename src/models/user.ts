/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
        phone: {
            type: String,
        },
    },
    { timestamps: true }
);
const User = mongoose.model("user", UserSchema);
export default User;
