import jwt from "jsonwebtoken";
import { sessionModel } from "../models/sessionModel.js";
import { public_key, secret_key } from "../config.js";
import { userModel } from "../models/userModel.js";
import { createApi } from "./createApi.js";

export async function loginSession({username, email, password, user_key}){
    const data = { username, email, password, user_key };
    
    const token = jwt.sign(data, secret_key, { algorithm: `RS256`, expiresIn: `1d` });
    const expiresAt = new Date(Date.now() + 300 * 1000);
    
    const sessionData = await new sessionModel({ token, expiresAt });
    sessionData.save();
    
    return sessionData
}

export async function createSession({username, email, password}){
    const user_key = createApi({ username, email, password })
    const data = { username, email, password, user_key };
    
    const userData = await new userModel(data)
    userData.save()
           
    const token = jwt.sign(data, secret_key, { algorithm: `RS256`, expiresIn: `1d`})
    const expiresAt = new Date(Date.now() + 300 * 1000)
           
    const sessionData = await new sessionModel({ token, expiresAt})
    sessionData.save()
    
    return token
}