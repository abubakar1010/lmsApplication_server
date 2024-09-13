import AdminAttendance from "../models/AdminAttendance.js";
import UserAttendance from "../models/UserAttendance.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getAttendance = () => asyncHandler( async(req, res) => {
    
    const {id} = req.params

    const progress = AdminAttendance.findById(id)

    if(!progress) throw new ApiError(400, "invalid attendance id")

    if(progress.status !== "inprogress") throw new ApiError(400, "attendance completed")

    const isRegistered = await UserAttendance.findOne({
        user: req.user._id,
        adminAttendance: id
    })

    if(isRegistered) throw new ApiError(200, "Already Registered")

    const attendance = new UserAttendance({
        user: req.user._id,
        adminAttendance: id
    })

    await attendance.save()

    res.status(201).json(new ApiResponse(201,{}, "attendance successful"))
})
const getAttendanceStatus = () => asyncHandler( async(req, res) => {

    const progress = await AdminAttendance.findOne({status: "inprogress"})

        if(!progress) throw new ApiError(400, "attendance time completed")

        const started = addMinutes(new Date(progress.createdAt), progress.timeLimit)

        const compare = isAfter(new Date(), started)

        console.log(compare);

        if(compare){
                progress.status = "completed"
                await progress.save()
        }
        res
        .status(201)
        .json( new ApiResponse(201, progress, "attendance sheet is inprogress"))
    
})

export {getAttendance, getAttendanceStatus}