import { addMinutes, isAfter } from "date-fns"
import AdminAttendance from "../models/AdminAttendance.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"

const getEnable = asyncHandler(async (req, res) => {

        const isInProgress = await AdminAttendance.findOne({status: "inprogress"})

        if(isInProgress) throw new ApiError(400, "already a attendance sheets inprogress")
    
        const attendance = new AdminAttendance({timeLimit: 1})
    
        await attendance.save()

        res
        .status(201)
        .json( new ApiResponse(201, attendance, "attendance sheet enable successful"))
    
})

const getDisable = () => asyncHandler(async(req, res) => {
        const progress = await AdminAttendance.findOne({status: "inprogress"})

        if(!progress) throw new ApiError(400, "nothing in progress")

                progress.status = "completed"
                await progress.save()

        res.status(200).json(new ApiResponse(200, progress, "attendance time finished"))

})

const getStatus = asyncHandler( async(req, res) => {
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

export {getDisable, getEnable, getStatus}