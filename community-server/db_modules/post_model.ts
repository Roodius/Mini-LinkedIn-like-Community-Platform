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
        required:true
    },
    description:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
          required: true
    },
    timestamp:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:String
    }
})

const Post:Model<Userpost> = model<Userpost>('post', postSchema);

export default Post;