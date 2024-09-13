import User from "../models/User.js";

const getUser = () => {
	return User.find();
};

const getUserByQuery = ({ key, value }) => {
	if (key === "_id") {
		return User.findById(value);
	}

	return User.findOne({ [key]: value });
};

const createNewUser = ({ name, email, password, role, status }) => {
	const user = new User({
		name,
		email,
		password,
		role: role ? role : ["STUDENT"],
		status: status ? status : ["PENDING"],
	});
	return user.save();
};

const deleteUserByProperTy = ({ key, value }) => {
	console.log({ key, value });
	
	return User.deleteOne({ [key]: value });
};

export { getUserByQuery, createNewUser, getUser, deleteUserByProperTy };
