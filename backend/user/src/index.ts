import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const PORT = process.env.PORT

const app = express()

app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
    
})