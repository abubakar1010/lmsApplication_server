import {Schema, model} from 'mongoose';

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
        type: Schema.Types.ObjectId,
        ref: "User"
    }
	
},
{
    timestamps: true
}
);

const Profile = model("Profile", profileSchema);

export default Profile;
