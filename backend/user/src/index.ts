import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import {createClient} from "redis"
import userRoutes from "./routes/user.js"

dotenv.config()

connectDB()

export const redisClient = createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379",
})

redisClient.connect()
           .then(()=> console.log(("✅Connected to RedisCLient"))
           )
           .catch(console.error)

const PORT = process.env.PORT

const app = express()



app.use("/api/v1", userRoutes);





app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
    
})