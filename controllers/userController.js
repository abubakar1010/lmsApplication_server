import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password, status, role } = req.body;

console.log(name);

	if (!name || !email || !password || !role) {
		 throw new ApiError(400, "Information not found");
	}
 

	const existUser = await User.findOne({name})

	if(existUser){
		throw new ApiError(403, "user already exist")
	}



	const user = new User({name, email, password, role, status})

	await user.save()
	

	res.json(new ApiResponse("201", user, "user created successfully"));
});

export { registerUser };
