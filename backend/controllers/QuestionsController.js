const { HrInterviewFilter } = require('../functionPieces/HrInterviewFilter');
const catchAsyncError = require('../middlewares/catchAsyncError');
const mcqquestionModel = require('../models/McqQuestionsModel');
const ErrorHandler = require('../utils/errorHandling');
const csv = require('csvtojson');

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
    const { id } = req.params;
    const { question_type } = req.body;
    if (!id) {
        return next(new ErrorHandler("question_id required", 404))
    }

    if (!question_type) {
        return next(new ErrorHandler("question_type required", 404))
    }

    const deleteQuestion = await mcqquestionModel.findById(id)

    if (!deleteQuestion) {
        return next(new ErrorHandler("Questions not found", 400))
    }

    await mcqquestionModel.findByIdAndDelete(id);
    const quesData = await HrInterviewFilter(question_type);
    res.status(200).json({
        success: true,
        data: quesData,
        message: "Question deleted successfully"
    })
})

exports.getAllQuestions = catchAsyncError(async (req, res, next) => {
    const { quesType } = req.body;

    const quesData = await HrInterviewFilter(quesType);
    res.status(200).json({
        success: true,
        data: quesData,
        message: "All questions fetched successfully"
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

exports.uploadQuestionsUsingCsv = catchAsyncError(async (req, res, next) => {
    const { file } = req;
    const questionAddedBy = req.user.role;
    const userId = req.user.id;

    if (!file) {
        return next(new ErrorHandler("No csv found", 404))
    }

    const fileType = file.mimetype.split('/')[1]

    if (fileType === "csv") {
        const jsonArray = await csv().fromString(req.file.buffer.toString());

        if (jsonArray.length) {
            console.log(jsonArray)
            // checking if all keys are exist in uploaded csv 
            const filterNonEmptyObject = jsonArray.filter((v) => {
                if (Object.keys(v).includes("question_type") && Object.keys(v).includes("question") && Object.keys(v).includes("options_1") && Object.keys(v).includes("options_2") && Object.keys(v).includes("options_3") && Object.keys(v).includes("options_4") && Object.keys(v).includes("answer")) {
                    return v
                }
            })

            if (filterNonEmptyObject.length) {
                //check if uploaded csv question is duplicate or not
                var newList = [];
                const getQuestionFromDatabase = await mcqquestionModel.find();
                for (let i = 0; i < filterNonEmptyObject.length; i++) {
                    if (getQuestionFromDatabase.length > 0) {
                        var count = 0;
                        for (let j = 0; j < getQuestionFromDatabase.length; j++) {
                            if (filterNonEmptyObject[i].question.trim() == getQuestionFromDatabase[j].question.trim()) {
                                ++count
                            }
                        }
                        if (count == 0) {
                            newList[newList.length] = filterNonEmptyObject[i];
                        }
                    } else {
                        newList = filterNonEmptyObject
                    }
                }

                const checkingisValueMissing = newList.filter((v) => {
                    return v.question_type && v.question && v.options_1 && v.options_2 && v.options_3 && v.options_4 && v.answer
                })

                if (checkingisValueMissing.length) {
                    if (checkingisValueMissing.length === newList.length) {
                        const makingNewArray = newList.map((v) => {
                            return {
                                question_type: v.question_type.toLowerCase().replace(/\n/g, ""),
                                question: v.question.replace(/\n/g, ""),
                                options: [
                                    v.options_1.replace(/\n/g, ""),
                                    v.options_2.replace(/\n/g, ""),
                                    v.options_3.replace(/\n/g, ""),
                                    v.options_4.replace(/\n/g, "")
                                ],
                                answer: v.answer.replace(/\n/g, ""),
                                questionAddedBy,
                                userId
                            }
                        })

                        const questions = await mcqquestionModel.insertMany(makingNewArray);

                        res.status(200).json({
                            success: true,
                            data: questions,
                            message: 'Csv questions uploaded successfully'
                        })
                    }
                    else {
                        res.status(400).json({
                            success: false,
                            message: 'values are missing in somewhere check and reupload'
                        })
                    }
                } else {
                    res.status(400).json({
                        success: false,
                        message: 'This all questions are already uploaded'
                    })
                }
            } else {
                res.status(400).json({
                    success: false,
                    message: 'The uploaded csv file does not contain following keys Like:question_type,question,options_1,options_2,options_3,options_4,answer'
                })
            }
        } else {
            res.status(400).json({
                success: false,
                message: 'The uploaded file does not have questions'
            })
        }
    } else {
        res.status(400).json({
            success: false,
            message: 'The uploaded file was not a matched format'
        })
    }
})