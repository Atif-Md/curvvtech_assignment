import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const register = async(req , res) =>{
    const {name , email , password , role } = req.body;

    const existingUser = await User.findOne({email});
    
    if(existingUser){
        return res.status(400).json({message:"user already exist"});
    }
 
    const hashedPassword = await bcrypt.hash(password,10);
  
    const newUser = await User.create({
       name ,
       email,
       password : hashedPassword,
       role : role || "user"
    });

   res.status(201).json({message:"user registered successfully" , user : newUser});
}

export const login = async(req,res) =>{
    const {email , password, role} = req.body;

    const existingUser =await User.findOne({email});

    if(!existingUser){
        return res.status(404).json({message:"user not found"});
    }

    const isMatch = await bcrypt.compare(password,existingUser.password);

    if(!isMatch){
        return res.status(400).json({message:"invalid password"});
    }

    const token = jwt.sign(
        {id : existingUser._id , role : existingUser.role},
        process.env.JWT_SECRET,
        {expiresIn : "1h"}
    )
    res.status(200).json({message:"user login successfully",user:existingUser,token:token});
}