import jwt from "jsonwebtoken"
import { public_key } from "../config.js"

export default async function (req, res){
    const { token, user_key } = req.body
    try{
        const isTokenValid = jwt.verify(token, public_key, { algorithm: `RS256` })
        const user = await userModel.findOne({user_key})
    
        if(isTokenValid && user){
            res.send(`Autherized...`)
        }
        else{
            res.send(`Invalid user_key...`)
        }
    }
    catch(err){
        res.send(err.message)
    }
}
