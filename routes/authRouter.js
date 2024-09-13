import { Router } from "express";
import { loginUser, registerUser, logout } from "../controllers/authController.js";


const authRouter = Router();

authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(loginUser);
authRouter.route("/logout").post(logout)


export default authRouter;
