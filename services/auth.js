import User from "../models/User.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { createNewUser, getUserByQuery } from "./user.js";

const registerService = async (name, email, password, status, role) => {
	// console.log(name);

	const existUser = await getUserByQuery({ key: "name", value: name });

	// console.log(existUser);

	if (existUser) {
		throw new ApiError(403, "user already exist");
	}

	const user = await createNewUser({ name, email, password, role, status });
	return user;
};

const loginService = async (email, password) => {
	const user = await getUserByQuery({ key: "email", value: email });

	if (!user) {
		throw new ApiError(401, "Invalid user credential");
	}

	const isPasswordCorrect = await user.checkPasswordMatched(password);

	if (!isPasswordCorrect) {
		throw new ApiError("401", "Incorrect Password");
	}

	const token = await user.generateAccessToken();
	delete user._doc.password;

	return { token, user };
};
const logoutService = () => {};

export { registerService, loginService, logoutService };
