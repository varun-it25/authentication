import { isCreateValid } from "../utils/validation.js"
import { createSession } from "../utils/createSession.js"

export default async function (req, res){
    const { username, email, password } = req.body
    const isValid = await isCreateValid(username, email, password)

    if(isValid === true){
        const data = {username, email, password}
        const response = await createSession(data)
        res.json(response)
    }

    else{
        res.status(400).send(isValid)
    }
}