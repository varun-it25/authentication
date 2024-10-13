import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    user_key: String
}, {versionKey: false})

export const userModel = mongoose.model(`users`, userSchema)