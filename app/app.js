import express from "express";
import userRouter from "../routes/userRouter.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser())



//routes
app.use("/app/v1/user", userRouter);

export default app;
