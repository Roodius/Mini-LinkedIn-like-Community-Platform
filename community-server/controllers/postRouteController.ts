import Post from "../db_modules/post_model.js";
import z, { string } from 'zod';
import { HTTPcodes } from "../responseCODES/HTTPcodes.js";



const userpostInput = z.object({
    title:z.string(),
    description:z.string(),
    timestamp:z.date()
})

export const craetePost = async (req:any,res:any) => {
    const {title, description, timestamp} = req.body;

        const result = userpostInput.safeParse({title, description, timestamp:new Date(timestamp)});

        if(!result.success){
            return res.status(HTTPcodes.BAD_REQUEST).json({
                msg:"Enter Valid inputs"
            })
        }

        try {
           const post = await Post.create({
                title,
                description,
                authorName:req.user.username,
                timestamp:new Date(timestamp) || new Date(),
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
