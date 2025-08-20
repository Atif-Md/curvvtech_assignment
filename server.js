import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"
import deviceRoutes  from "./routes/deviceRoutes.js"
import logRoutes from "./routes/logRoutes.js"


dotenv.config();

const app = express();

 //middleware
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected"))
.catch((e)=>console.log("mongodb not connected",e.message));

app.get("/",(req,res)=>{
    res.send("hello bro");
})

 // authentication route
app.use("/api/auth",userRoutes);

 // for device
 app.use("/api/device",deviceRoutes);

 // for logs
app.use("/api/logs",logRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`app is running on ${process.env.PORT}`);
})