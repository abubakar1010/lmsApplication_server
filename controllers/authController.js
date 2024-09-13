
import { loginService, registerService } from "../services/auth.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password, status, role } = req.body;

	// console.log(name);

	if (!name || !email || !password || !role) {
		throw new ApiError(400, "Information not found");
	}

	const user = await registerService(name, email, password, status, role);

	res.json(new ApiResponse("201", user, "user created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// console.log(email);

	if (!email || !password) {
		throw new ApiError(400, "User credential not fund ");
	}

	const { token, user } = await loginService(email, password);
	// console.log(user);

	res
		.cookie("accessToken", token)
		.json(new ApiResponse(200, user, "Login Successful"));
});


const logout = asyncHandler(async (req, res) => {
	const option = {
		httpOnly: true,
		secure: true,
	};
	res
		.status(200)
		.clearCookie("accessToken", option)
		.clearCookie("access-token", option)
		.json(new ApiResponse(200, {}, "User Logged Out"));
});

export { registerUser, loginUser, logout };
