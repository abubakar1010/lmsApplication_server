import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			validate: {
				validator: function(v) {
				  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
				},
				message: props => `${props.value} is not a valid Email Address!`
			  },
		},
		password: {
			type: String,
			required: true,
			maxLength: [30, "Password is too long"],
			minLength: [6, "password is too short"]
		},
		role: [
			{
				type: String,
				required: true,
				enum:{values:["student", "admin", "moderator"], message: '{value} is not allowed'},
				default: "student"
			},
		],
		accountStatus: {
			type: String,
			required: true,
			enum:["pending", "active", "rejected"],
			default: "pending",
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 10);
	next();
});


const User = model("User", userSchema);

export default User;
