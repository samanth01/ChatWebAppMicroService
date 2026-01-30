import express from "express"
import dotenv from "dotenv"
import { startSendOtpConsumer } from "./consumer.js"

dotenv.config()

const PORT = process.env.PORT


startSendOtpConsumer();


const app = express()



app.listen(PORT, ()=>{

    console.log("Server is runnign on PORT: ", PORT);
    
})
