import { Router } from "express";
import { loginUser, privateRoute, registerUser, logout } from "../controllers/userController.js";
import verifyToken from "../middlewares/jwtAuth.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/private").get(verifyToken, privateRoute)
userRouter.route("/logout").post(logout)


export default userRouter;
