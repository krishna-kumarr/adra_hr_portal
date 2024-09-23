const catchAsyncError = require("../middlewares/catchAsyncError")
const schedule = require('../models/scheduleModel');
const ErrorHandler = require("../utils/errorHandling");

exports.createSchedule = catchAsyncError(async (req, res, next) => {
    const { day, description, id, label, time, title } = req.body;
    const role = req.user.role
    const userId = req.user.id

    const create = await schedule.create({ userId, role, day, description, id, label, time, title })
    res.status(200).json({
        success: true,
        data: create
    })
})

exports.updateSchedule = catchAsyncError(async (req, res, next) => {
    let updateSchedule = await schedule.findById(req.body._id)
    if (!updateSchedule) {
        return next(new ErrorHandler('schedule not found', 404))
    }

    const updatedschedule = await schedule.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(201).json({
        success: true,
        data: updatedschedule,
        message: "schedule updated successfully"
    })
})

exports.getSchedules = catchAsyncError(async (req, res, next) => {
    const { user } = req;

    if (!user) {
        return next(new ErrorHandler('you cant get schedule details', 404))
    }

    let getSchedules;

    if (user.role === "Hr") {
        getSchedules = await schedule.find({ role: "Hr" })

        res.status(201).json({
            success: true,
            data: getSchedules,
            message: "schedule fetched successfully"
        })
    }
})