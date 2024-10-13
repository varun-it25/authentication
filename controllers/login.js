import { userModel } from "../models/userModel.js"
import { loginSession } from "../utils/createSession.js"

export default async function (req, res){
    const {email, username, password} = req.body
    if(email && password){
        const user = await userModel.findOne({email})
        const p = await userModel.findOne({email, password})

        if(user && p){
            const session = await loginSession(user)
            res.status(200).json(session)
        }
        else if(user){
            res.status(400).send(`Incorrect password...`)
        }
        else {
            res.status(404).send(`User not found...`)
        }
    }

    else if(username && password){
        const user = await userModel.findOne({username})
        const p = await userModel.findOne({username, password})

        if(user && p){
            const session = await loginSession(user)
            res.status(200).json(session)
        }
        else if(user){
            res.status(400).send(`Incorrect password...`)
        }
        else {
            res.status(404).send(`User not found...`)
        }
    }
}