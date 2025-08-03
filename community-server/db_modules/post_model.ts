import mongoose, {Model, Schema,model,Document} from "mongoose";

interface Userpost extends Document {
    title:string,
    description:string,
    authorName:string,
    timestamp:Date
}


const postSchema = new Schema({
    title:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    authorName:{
        type:String,
        required:false
    },
    timestamp:{
        type:Date,
    },
    userId:{
        type:String
    }
})

const Post:Model<Userpost> = model<Userpost>('post', postSchema);

export default Post;