import mongoose from "mongoose";

const adminAttendanceSchema = new mongoose.Schema({

    status:{
        type: String,
        required: true,
        enum:["inprogress", "completed"],
        default: "inprogress"
    },

    timeLimit:{
        type: Number,
        required: true,
        max:30,
        min:1,
        default:10
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
},
{
    timestamps: true
}
)

const AdminAttendance = mongoose.model("AdminAttendance", adminAttendanceSchema)

export default AdminAttendance

