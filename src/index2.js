import dotenv from "dotenv"
import connectDB from "./db";

dotenv.config({
  path:"./env"
})

connectDB()









/*
import express from express

const app  = express()

(async ()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_Name}`)
      app.on("erroe",(e)=>{
        console.log("ERROR db", e);
        throw e
      })  
      app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on ${process.env.PORT}`)
      })
    } catch (error) {
        console.error("error ",error);
    }
})()
    */