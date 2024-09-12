import mongoose from "mongoose";

const userAttendanceSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types,
        ref: "User"
    },
    adminAttendance:{
        type: mongoose.Schema.Types,
        ref: "AdminAttendance"
    }
},
{
    timestamps: true
}
)

const UserAttendance = mongoose.model("UserAttendance", userAttendanceSchema)

export default UserAttendance

