import crypto from "crypto";
import fs from "fs";

const private_key = fs.readFileSync(`./private.pem`);
const public_key = fs.readFileSync(`./public.pem`);

export function createApi(userData){
    const uniqueString = `${public_key}${private_key}${JSON.stringify(userData)}`;
    const api_key = crypto.createHash('sha256').update(uniqueString).digest('hex').slice(0, 24);
    return api_key
}