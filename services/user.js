import User from "../models/User.js";

const getUserByQuery = async ({ key, value }) => {
	if (key === "_id") {
		return await User.findById(value);
	}

	return await User.findOne({ [key]: value });
};

const createNewUser = ({ name, email, password, role, status }) => {
	const user = new User({ name, email, password, role, status });
	return user.save();
};

export { getUserByQuery, createNewUser };
