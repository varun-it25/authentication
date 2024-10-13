import { userModel } from "../models/userModel.js";

export async function isCreateValid (u, e, p){
    if(u && e && p){
        const email = await userModel.findOne({email: e})
        const username = await userModel.findOne({username: u})

        if(email || username){
            if(email && username){
                return `email & username already taken`
            }
            else if(email){
                return `email already taken`
            }
            else if(username){
                return `username already taken`
            }
        } else{
            return true
        }
    }
    
    else if(!e && !p && !u){        
        return `username, email and password required...`
    }

    else if(!u && !e){        
        return `username and email required...`
    }

    else if(!e && !p){        
        return `email and password required...`
    }

    else if(!u && !p){        
        return `username and password required...`
    }

    else if(!e){
        return `email required...`
    }

    else if(!u){
        return `username required...`
    }
    
    else if(!p){
        return `password required...`
    }
}