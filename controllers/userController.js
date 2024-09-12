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

	const existUser = await User.findOne({ name });

	if (existUser) {
		throw new ApiError(403, "user already exist");
	}

	const user = new User({ name, email, password, role, status });

	await user.save();

	res.json(new ApiResponse("201", user, "user created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// console.log(email);

	if (!email || !password) {
		throw new ApiError(400, "User credential not fund ");
	}

	const user = await User.findOne({ email });

	// console.log(user);

	if (!user) {
		throw new ApiError(401, "Invalid user credential");
	}

	const isPasswordCorrect = await user.checkPasswordMatched(password);

	if (!isPasswordCorrect) {
		throw new ApiError("401", "Incorrect Password");
	}

	console.log(isPasswordCorrect);

	const token = await user.generateAccessToken();
	delete user._doc.password;
	// console.log(user);

	res
		.cookie("access-token", token)
		.json(new ApiResponse(200, user, "Login Successful"));
});

export { registerUser, loginUser };
