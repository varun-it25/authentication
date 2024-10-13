import dotenv from "dotenv";
import fs from "fs";
dotenv.config()

export const DATABASE_STR = `mongodb://localhost:27017/auth`
export const PORT = process.env.PORT
export const secret_key = fs.readFileSync(`./private.pem`)
export const public_key = fs.readFileSync(`./public.pem`)