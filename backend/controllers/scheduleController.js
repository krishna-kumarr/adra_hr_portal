const catchAsyncError = require("../middlewares/catchAsyncError")
const schedule = require('../models/scheduleModel');
const User = require("../models/userModel");


exports.createSchedule = catchAsyncError(async(req,res,next)=>{
    const {day,description,id,label,time,title}=req.body;
    const role = req.user.role
    const userId = req.user.id


    const create = await schedule.create({userId,role,day,description,id,label,time,title})
    res.status(200).json({
        success:true,
        data:create
    })
})

exports.updateSchedule = catchAsyncError(async(req,res,next)=>{
    let updateSchedule = await schedule.findById(req.body.scheduleId)
    if (!updateSchedule) {
        return next(new ErrorHandler('schedule not found', 404))
    }

    const updatedschedule = await schedule.findByIdAndUpdate(req.body.scheduleId,req.body,{
        new:true,
        runValidators:true
    })

    res.status(201).json({
        success: true,
        data: updatedschedule,
        message: "schedule updated successfully"
    })
})

exports.getSchedules = catchAsyncError(async(req,res,next)=>{
    // let 
})