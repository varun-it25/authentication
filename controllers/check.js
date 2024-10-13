import jwt from "jsonwebtoken"
import { public_key } from "../config.js"

export default async function (req, res){
    const { token } = req.body
    try{
        const isTokenValid = jwt.verify(token, public_key, { algorithm: `RS256` })
    
        if(isTokenValid){
            res.send(isTokenValid)
        }
        else{
            res.status(400).send(`Invalid token...`)
        }
    }
    catch(err){
        res.status(500).json({error: err})
    }
}
