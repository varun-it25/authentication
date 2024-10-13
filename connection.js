import mongoose from "mongoose";
import { DATABASE_STR } from "./config.js";

export default function connection(){    
    try{
        mongoose.connect(DATABASE_STR)
          .then(e => { console.log(`Mongodb connected...`) })
          .catch(e => { console.log(`Mongodb error: ${e}`) })
    }
    catch(err){
        throw new Error(err)
    }
}