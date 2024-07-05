import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
    console.log(`MongoDb connected  db host ${connectionInstance.connection.host}`)
    
  } catch (error) {
    console.log("Mongodb connection error ",error);
    process.exit(1)
  }
};

export default connectDb;
