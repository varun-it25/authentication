import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    token: String,
    expiresAt: { type: Date, index: { expires: '1m' } }
}, {versionKey: false})

export const sessionModel = mongoose.model(`sessions`, sessionSchema)