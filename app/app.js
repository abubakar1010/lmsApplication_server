import express from "express";
import authRouter from "../routes/authRouter.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import userRouter from "../routes/userRoute.js";
import verifyToken from "../middlewares/jwtAuth.js";
import attendanceRoute from "../routes/adminAttendanceRoute.js";


const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser())



//routes
app.use("/app/v1/auth", authRouter);
app.use("/app/v1/users",verifyToken, userRouter)
app.use("/app/v1/adminAttendance",verifyToken, attendanceRoute) 

 
export default app;
