import { Router } from "express";
import { getAttendance, getAttendanceStatus } from "../controllers/studentAttendanceController.js";


const studentsAttendanceRoute = Router()

studentsAttendanceRoute.route("/getAttendance/:id").get(getAttendance)
studentsAttendanceRoute.route("/getAttendanceStatus").get(getAttendanceStatus)

export default studentsAttendanceRoute