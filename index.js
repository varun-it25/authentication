import express from "express";
import cors from "cors";
import connection from "./connection.js";
import create from "./controllers/create.js";
import login from "./controllers/login.js";
import { PORT } from "./config.js";
import check from "./controllers/check.js";
connection();

const app = express()
app.use(cors())
app.use(express.json())

app.post(`/register`, create)
app.post(`/login`, login)
app.post(`/check`, check)

app.listen(PORT,()=>{ console.log(`Server runs ON PORT: ${PORT}...`) })