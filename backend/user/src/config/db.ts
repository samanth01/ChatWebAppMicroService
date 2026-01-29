import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI


const connectDB = async()=>{

    if(!MONGODB_URI){
        throw new Error("MONGODB_URI is not defined in the enviornment variables")
    }


    try {

        await mongoose.connect(MONGODB_URI,  {
            dbName: "ChatAppMicroservicebased"
        })

        console.log("✅ Connected to MONGODB");
        
        
    } catch (error) {
        console.error("Failed to connnect to mongodb", error);
        process.exit(1);
        
    }



}



export default connectDB;