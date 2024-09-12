import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/User.js";

const verifyToken = asyncHandler(async (req, res, next) => {

    try {
        const {accessToken:token} = req.cookies
        if(!token){
            throw new ApiError(400, "Token not found")
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        // console.log(decodedToken);
    
        const user = await User.findOne({_id: decodedToken._id}).select(" -password")
    
        if(!user){
            throw ApiError(401, "Unauthorized access")
        }
        req.user = user;
        next()      
    } catch (error) {
        throw new ApiError(401, error?.message)
        
    }
    
})
 
export default verifyToken 