import { createNewUser, getUser, getUserByQuery } from "../services/user.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getAllUser = asyncHandler(async (req, res) => {

    const user = await getUser()

    if(user) throw new ApiError(400, "user not found")

    res
    .status(200)
    .json(new ApiResponse(200, user, "User find successful"))
    
})
const getSpecificUserById = asyncHandler(async (req, res) => {

    const id = req.params.userId

    const user = await getUserByQuery({key: "_id", value:id})
    console.log(user);
    
    if(!user) throw new ApiError(400, "user not found by using id")

    res
    .status(200)
    .json(new ApiResponse(200, user, "successfully find specific user"))
    

})
const postUser = asyncHandler(async (req, res) => {

    const { name, email, password, role, status } =  req.body

    if([name, email, password, role, status].some( item => !item)){
        throw new ApiError(400, "user data not found")
    }
 
    const user = await createNewUser({ name, email, password, role, status })

    if(!user) throw new ApiError(401, "User Create Failed")

        res.status(201).json(new ApiResponse(201, user, "User created successful"))

})
const updateUserById = asyncHandler(async (req, res) => {

})
const deleteUserById = asyncHandler(async (req, res) => {

})

export {getAllUser, getSpecificUserById, postUser, updateUserById, deleteUserById}