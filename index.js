import express from "express"; 
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
dotenv.config()

const app = express();
const PORT = 4000;

const connect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://Gopi2301:Gopi123@cluster0.qoaszln.mongodb.net");
        console.log("Connected to MongoDB")
    } catch (error){
        throw error;
    }
};

// middlewares 
app.use(cookieParser());
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status ||500
    const errorMessage = err.message ||"Something went Wrong!"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})

app.listen(PORT, () => {
    connect()
console.log(`The server started in: ${PORT} ✨✨`)
});
