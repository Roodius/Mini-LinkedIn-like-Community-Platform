import mongoose, {Schema ,Document, Model} from "mongoose";
import {v4 as uuidv4} from 'uuid'
type pass = string | number

interface Userinput extends Document {
    firstName:string,
    lastName:string,
    username:string,
    password:string,
    email:pass     
}

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    username:{
        type:String,
        require:false
    },
    userId: {
        type:String,
        required:true,
        default: () => uuidv4()
    }
})

const User:Model<Userinput>  = mongoose.model<Userinput>('users',UserSchema);

export default User;