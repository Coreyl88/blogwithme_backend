import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog_routes';
import router from "./routes/routes"
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect('MONGDB_URI')
.then(()=>app.listen(4000))
.then(()=>console.log("Connected to Database and Listening to Local Host 4000"))
.catch((err)=>console.log(err));
