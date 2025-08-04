import Post from "../db_modules/post_model.js";
import z, { string } from 'zod';
import { HTTPcodes } from "../responseCODES/HTTPcodes.js";
import { jwtpayload } from "./UserRoutesControllers.js";
import { Response,Request } from "express";


const userpostInput = z.object({
    title:z.string(),
    description:z.string(),
})

type PostInput = z.infer<typeof userpostInput>

interface AuthRequest extends Request<{},{},PostInput> {
  user?: jwtpayload
//   title:string,
//   description:string
//   body:any
}


export const craetePost = async (req:AuthRequest,res:Response) => {

    const {title, description} = req.body;

    

        const result = userpostInput.safeParse({title, description});

        if(!result.success){
            return res.status(HTTPcodes.BAD_REQUEST).json({
                msg:"Enter Valid inputs"
            })
        }

        if (!req.user) {
  return res.status(HTTPcodes.UNAUTHORIZED).json({ msg: "User not found in request" });
}
    
       
        try {
           const post = await Post.create({
                title,
                description,
                authorName:req.user.username,
                userId:req.user.userId
            })

            return res.status(HTTPcodes.CREATED).json({
                success: true,
                post,
                });
        } catch (error:any){
            return res.status(HTTPcodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Failed to create post",
                error: error.message,
                });
        }
}   

export const getposts =  async (req:any,res:any) => {
    try {
        const posts = await Post.find({});
        return res.status(HTTPcodes.OK).json({
                success: true,
                posts,
                }); 
    } catch (error:any){
        return res.status(HTTPcodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Failed to get post",
                error: error.message,
                });
    }
}   



export const getpostsById =  async (req:any,res:any) => {
    const userId  =  req.params.userId;
    try {
        const personpost = await Post.findOne({userId:req.user.userId});
        return res.status(HTTPcodes.OK).json({
                success: true,
                personpost,
                }); 
    } catch (error:any){
        return res.status(HTTPcodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Failed to get yours post",
                error: error.message,
                });
    }
}   
