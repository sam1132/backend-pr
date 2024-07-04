
import mongoose from "mongoose";
import { DB_Name } from "../constant.js";


const  connectDB = async ()=>{
    try {
      const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
      console.log(`Mongo db connected -- db host ${connectionInstance.connection.host}`)
      
    } catch (error) {
        console.error("Db connection error",error);
        process.exit(1)
    }
}

export default connectDB;