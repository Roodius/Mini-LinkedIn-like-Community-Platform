import express from 'express';
import dotenv from 'dotenv';
import Userrouter from './routes/userRoutes.js';
import PostRouter from './routes/postRoutes.js'
import connectToDb from './db_modules/connection.js';
import cors from "cors";
dotenv.config();
const PORT = process.env.port 
console.log(PORT)

const app = express();

app.use(cors({
      origin: "http://localhost:5173",  // or your frontend port
  credentials: true
}));
app.use(express.json());
app.use('/user', Userrouter);
app.use('/post', PostRouter);

connectToDb();

app.listen(PORT , () => console.log(`server  started on ${PORT}`))