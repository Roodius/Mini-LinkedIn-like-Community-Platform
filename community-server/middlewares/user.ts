import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.jwt_secret
// console.log(SECRET);
import { HTTPcodes } from '../responseCODES/HTTPcodes.js';
import { NextFunction,Response,Request } from 'express';

interface JwtPayload {
  userId: string;
  username: string;
}


export const userMiddleware = (req: Request & { user?: JwtPayload }, res: Response, next: NextFunction) => {
    const BearerToken = req.headers.authorization;

    if(!BearerToken || !BearerToken.startsWith("Bearer ")){
        return res.status(HTTPcodes.NOT_FOUND).json({msg:"Token Not found"});
    }   

    if(!SECRET){
        throw new Error("SECRET is not defined in this scope")
    }
    try{
        const token = BearerToken.split(' ')[1];
        const decodedToken = jwt.verify(token,SECRET)  as JwtPayload
        req.user = decodedToken;
        next();
    } catch(error:any){
        console.log(error.message);
        return res.status(HTTPcodes.UNAUTHORIZED).json({
            success:false,
            message:"Invalid Token",
            error:error.message
        })
    }

}





