import User from "../db_modules/user_model.js";

import jwt  from "jsonwebtoken";
import {v4 as uuidv4} from 'uuid'
import { HTTPcodes } from "../responseCODES/HTTPcodes.js";
import dotenv from "dotenv";
import z from 'zod';
dotenv.config();
const SECRET = process.env.jwt_secret;


const SignUpSchema = z.object({
    firstName:z.string(),
    lastName:z.string(),
    username:z.string().min(3).max(20).regex(
  /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
  "Username must contain only letters, numbers, and special characters"),
    password:z.string().min(3).max(20).regex(
  /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
  "Username must contain only letters, numbers, and special characters"),
  email:z.string().email('Invalid email format'),
})

interface jwtpayload {
    userId:string,
    email:string
}

const generateToken = (userId:string, email:string):string => {
        const mixup:jwtpayload = {userId , email};

        if(!SECRET){
            throw new Error("JWT secret is not defined");
        }

        const token = jwt.sign(mixup, SECRET, {
            expiresIn :"4h"
        })
        return token;
}

export const signup =async (req:any,res:any) => {
      const userId = uuidv4(); 
    const {firstName, lastName, username,password,email }= req.body;

    const result = SignUpSchema.safeParse({firstName, lastName, username,password,email});
    
    if(!result.success){
        return res.status(HTTPcodes.BAD_REQUEST).json({msg:"provide Valid detailes"})
    }

    if(!SECRET){
        return res.status(HTTPcodes.INTERNAL_SERVER_ERROR).json({error:"internal server error"});
    }

    try {

        const Token = generateToken(userId,email);
        await User.create({
        firstName,
        lastName,
        username,
        password,
        email,
        userId:userId
        })
        return res.status(HTTPcodes.OK).json({
            msg:"Sign up Successfull",
            "token":Token
        })
    } catch (error:any){
        console.log(error);
        return res.status(HTTPcodes.INTERNAL_SERVER_ERROR).json({
            msg:"failed",
        })
    }
}
// ------------sign in -----------------//

const inputsignInSchema = z.object({
    username:z.string().min(3).max(20).regex(
  /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
  "Username must contain only letters, numbers, and special characters"),
    password:z.string().min(3).max(20).regex(
  /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,
  "Username must contain only letters, numbers, and special characters"),
})



export const signin = async (req:any,res:any) => {  
    const {username, password} = req.body;   

    const result = inputsignInSchema.safeParse({username, password});

    if(!result.success){
        return res.status(HTTPcodes.BAD_REQUEST).json({
            msg:"Enter valid Info"
        })
    }

    try {
        await User.findOne({username,password})
        return res.status(HTTPcodes.OK).json({
            msg:"Signin Successfull"
        })
    } catch (error:any){
        return res.status(HTTPcodes.BAD_REQUEST).json({
            msg:"User Not Found"
        })
    }
}


export const getusers = async (req:any,res:any) => {
    try {
        const users = await User.find({});

        return res.status(HTTPcodes.OK).json({
            msg:"Success",
            'users':users
        })
    }catch(error:any){
        return res.status(HTTPcodes.INTERNAL_SERVER_ERROR).json({
            msg:"Internal sevrer error"
        })
    }
}