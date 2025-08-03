import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_LINK = process.env.db_link
// console.log(DB_LINK);

if (!DB_LINK) {
  throw new Error("MongoDB connection string (db_link) is not defined in the environment variables.");
}

const connectToDb = async():Promise<void> => {
    try {
        await mongoose.connect(DB_LINK);
        console.log("MongoDb Connected");
    } catch (error:any) {
        console.error("DB connection failed:", error.message);
        process.exit(1); // Exit on failure
    }
}


export default connectToDb;