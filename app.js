import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog_routes.js';
import router from "./routes/routes.js"
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>app.listen(4000))
.then(()=>console.log("Connected to Database and Listening to Local Host 4000"))
.catch((err)=>console.log(err));