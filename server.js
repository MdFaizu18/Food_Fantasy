import "express-async-errors";
import express, { response } from 'express';
import * as dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import multer from "multer";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const port = 5005;

// middleware uses 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());




// //!--------------------------Routers---------------------------
import authRouter from './Routes/AuthRouter.js'
import dishRouter from './Routes/DishRouter.js'
import reserveRouter from './Routes/ReserveRouter.js'
import { getCurrentUser, getUserRole } from './Controller/UserController.js';

// //!-------------------------middleware--------------------------
import errorHandlerMiddleware from './Middleware/errorHandlerMiddleware.js'
import { authenticateUser } from './Middleware/authMiddleware.js';
import { validateUpdateDish } from "./Middleware/validationMiddleware.js";
import Dishes from "./Models/DishesModel.js";

// //!----------------------AllLogics-------------------------------
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/dish", dishRouter);
app.use("/api/v1/users/:email", getUserRole)
app.use("/api/v1/current-user", authenticateUser, getCurrentUser)
app.use("/api/v1/reserve", reserveRouter);

// to show all the dishes 
app.get("/api/v1/admin/items", async(req,res)=>{
    try{
     const dishes = await Dishes.find();
     res.status(200).json({dishes:dishes})
    }catch(error){
    res.status(500).json(error)
    }
})
// to initialize cloudinary 
cloudinary.v2.config({
   cloud_name:process.env.CLOUD_NAME,
   api_key:process.env.API_KEY,
   api_secret:process.env.API_SECRET
})

// use memeroy storagef or cloudingtary 
const storage = multer.memoryStorage();
const upload = multer ({storage:storage});

app.post("/api/v1/admin/addDish", upload.single("file"),async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).json({error:"No file is uploaded"})
        }
        const {name,category, price, newPrice , rate, quantity,desc,status }= req.body;
        // creating a promise to upload the iamage to cloudinary
        const cloudinaryUpload = new Promise((resolve,reject)=>{
            const cloudinaryStream = cloudinary.v2.uploader.upload_stream(
                {
                    folder:"cloud-image"
                },
                (error,result)=>{
                    if(error){
                        reject(error);
                    }else{
                        resolve(result);
                    }
                }
            );
            cloudinaryStream.write(req.file.buffer);
            cloudinaryStream.end();
        })
        // waiting for the cloudinary upload to completer 
        const cloudinaryResult = await cloudinaryUpload;
        const imageUrl = cloudinaryResult.secure_url;
        const newDish = new Dishes ({
            name,
            price,
            newPrice,
            desc,
            rate,
            category,
            quantity,
            status,
            imageUrl
        })
        await newDish.save();
        res.status(201).json({message:'Data and image uploaded successfully'})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'internal server error'})
    }
})

// //!----------------------testRoutes-----------------------------
app.get("/", (req, res) => {
    console.log(req);
    res.send("hello world");
});
app.post("/", (req, res) => {
    res.json({ msg: "data received", data: req.body });
    console.log(req.body);
});
app.get('/api/v1/test', (req, res) => {
    res.json({ msg: 'test route' });
});

// //!---------------------errorControl------------------------------
app.use("*", (req, res) => {
    res.status(404).json({ msg: "Dishes are un-available" });
});
app.use(errorHandlerMiddleware);


// for connecting mongodb and listening port 
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${ port }....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
















