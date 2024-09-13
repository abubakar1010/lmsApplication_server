import { Router } from "express";
import { getAllUser, getSpecificUserById, postUser, updateUserById, deleteUserById} from "../controllers/userController.js";

const userRouter = Router()

/**
 * update user 
 * @method patch
 */


userRouter.route("/:userId").patch(updateUserById)

/**
 * delete user 
 * @method get
 */

userRouter.route("/:userId").delete(deleteUserById)

/**
 * get user by id 
 * @method get
 */

userRouter.route("/:userId").get(getSpecificUserById)


/**
 * get user by id 
 * @method post
 */

userRouter.route("/").post(postUser)


/**
 * get all user 
 * @method get
 */

userRouter.route("/").get(getAllUser)

export default userRouter