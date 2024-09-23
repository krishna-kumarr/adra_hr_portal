const mongoose = require('mongoose');

const mcqquestionShema = new mongoose.Schema({
    question_type:{
        type: String,
        required: [true, "Question Type required"]
    },
    question: {
        type: String,
        required: [true, "Question required"]
    },
    options: {
        type: [String],
        required: [true, "options required"],
        validate: {
            validator: function (val) {
                return val.length === 4;
            },
            message: "You must provide 4 options."
        }
    },
    answer: {
        type: String,
        required: [true, "Answer required"]
    },
    candidate_answer: {
        type:String,
        default:''
    }, 
    questionAddedBy: {
        type: String,
        required: [true, "Question added by user role required"]
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const mcqquestionModel = mongoose.model("question_and_answer", mcqquestionShema);

module.exports = mcqquestionModel;