const express = require('express');
const { createQuestions, getQuestionTypes, updateQuestions, deleteQuestions } = require('../controllers/QuestionsController');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const router = express.Router();

router.route("/get_question_types").get(isAuthenticatedUser,getQuestionTypes);
router.route("/create_questions").post(isAuthenticatedUser,createQuestions);
router.route("/update_question").put(isAuthenticatedUser,updateQuestions);
router.route("/delete_question/:id").delete(isAuthenticatedUser,deleteQuestions);



module.exports = router;