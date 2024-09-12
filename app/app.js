import express from "express";
import userRouter from "../routes/userRouter.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser())


// globally handle error 

// app.use((err, req, res, next) => {
//     const statusCode = err.status || 500;
//     res.status(statusCode).json({
//         success: false,
//         message: err.message || "Internal Server Error",
//         errors: err.errors || [],
//     });
// });

//routes

app.use("/app/v1/user", userRouter);

export default app;
