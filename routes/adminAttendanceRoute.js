import { Router } from "express";
import { getDisable, getEnable, getStatus } from "../controllers/adminAttendanceController.js";

const attendanceRoute = Router()

attendanceRoute.route("/enable").post(getEnable)
attendanceRoute.route("/disable").post(getDisable)
attendanceRoute.route("/running").post(getStatus)

export default attendanceRoute