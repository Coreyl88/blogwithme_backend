import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog_routes.js';
import router from "./routes/routes.js"
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 4000;

app.use(cors({
    origin: "*",
}));
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', ()=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB connected...✅ ✅ ✅`
))

mongoose.connection.on('error', (error)=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB error encountered...❌ ❌ ❌ \n ${{error}}`
))

mongoose.connection.on('disconnnected', ()=>console.log(
    `${new Date().toLocaleTimeString()}: MongoDB disconnected.`
))

app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on ${port}`);
});