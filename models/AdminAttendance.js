import mongoose from "mongoose";

const adminAttendanceSchema = new mongoose.Schema({

    status:{
        type: String,
        required: true
    },

    timeLimit:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types,
        ref: "User"
    }
    
},
{
    timestamps: true
}
)

const AdminAttendance = mongoose.model("AdminAttendance", adminAttendanceSchema)

export default AdminAttendance

