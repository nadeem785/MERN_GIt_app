import express from "express";
import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'
import dotenv from 'dotenv'
import cors from 'cors'



dotenv.config();

const app= express()
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use('/api/users/',userRoutes)
app.use('/api/explore',exploreRoutes)


app.listen(5000,()=>{
    console.log("Server is running on port 3000")


})