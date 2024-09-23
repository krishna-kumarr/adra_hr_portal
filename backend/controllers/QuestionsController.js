const catchAsyncError = require('../middlewares/catchAsyncError');
const mcqquestionModel = require('../models/McqQuestionsModel');
const ErrorHandler = require('../utils/errorHandling');



exports.createQuestions = catchAsyncError(async (req, res, next) => {
    const { flag, data } = req.body;
    const questionAddedBy = req.user.role;
    const userId = req.user.id;

    if (flag === "mcq") {
        const add_UserId_And_AddedBy = data.map((v) => {
            return { ...v, questionAddedBy, userId }
        })

        const questions = await mcqquestionModel.insertMany(add_UserId_And_AddedBy);

        res.status(200).json({
            success: true,
            questions,
            message: "Question insterted successfully"
        })
        return
    } else {
        return next(new ErrorHandler("flag required Ex:aptitude,reasoning,technical question", 404))
    }
});



exports.updateQuestions = catchAsyncError(async (req, res, next) => {
    const validatingQuestion_byId = await mcqquestionModel.findById(req.body._id)
    if (!validatingQuestion_byId) {
        return next(new ErrorHandler("Question not found", 404))
    } 
    
    const updateQuestion = await mcqquestionModel.findByIdAndUpdate(req.body._id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        updateQuestion,
        message: "Question updates successfully"
    })
})



exports.deleteQuestions = catchAsyncError(async (req, res, next) => {
    
    const deleteQuestion = await mcqquestionModel.findById(req.params.id)

    if (!deleteQuestion) {
        return next(new ErrorHandler("Questions not found", 404))
    } 

    await mcqquestionModel.deleteOne(req.body)

    res.status(200).json({
        success: true, 
        message: "Question deleted successfully"
    })
})



exports.getQuestionTypes = catchAsyncError(async (req, res, next) => {
    const questions = await mcqquestionModel.find({}, { question_type: 1, _id: 0 })

    let question_types = [];

    questions.forEach((ques) => {
        if (!question_types.includes(ques.question_type)) {
            question_types[question_types.length] = ques.question_type
        }
    })
    res.status(200).json({
        success: true,
        question_types,
        message: "question types fetched successfully"
    })
})