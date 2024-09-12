
const {model,Schema} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
	SpeechRecognitionResultList: [{ type: String, required: true }],
    accountStatus:{
        type: String,
        required: true

    }
},
{
    timestamps: true
})

 const User = model("User",userSchema )

 export default User