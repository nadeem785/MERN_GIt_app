import mongoose from "mongoose";

export default async function connectMongoDb(){
    try{
await mongoose.connect(process.env.MONGO_URI)
console.log("MongoDB connected");
    }
    catch(error){
console.log("error connecting to MongoDB: ",error.message)
    }
}