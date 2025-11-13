import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import {connectToSocket} from "./controllers/socketManager.js"
import cors from "cors";


const app = express();
//app connected to server
const server=createServer(app);
//connecting new server to server
const io = connectToSocket(server);


app.set("port",(process.env.PORT || 8000))
//cors used to tacke allow https error
app.use(cors());
//we put limit to prevent any misconduct done by other
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://khushisarojj_db_user:hP6gzRPKWJPZOtDS@cluster0.w2mgmdl.mongodb.net/")
    console.log(`MONGO Connected Db Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("app is listing on Port:8000")
    });
}
start();