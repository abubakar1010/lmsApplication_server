const { model, Schema, default: mongoose } = require("mongoose");

const profileSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	
	avatar: {
		type: String,
		required: true,
	},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
	
},
{
    timestamps: true
}
);

const Profile = model("Profile", profileSchema);

export default Profile;
