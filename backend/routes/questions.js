const express = require('express');
const multer = require('multer')
const { createQuestions, getQuestionTypes, updateQuestions, deleteQuestions, uploadQuestionsUsingCsv, getAllQuestions } = require('../controllers/QuestionsController');
const { isAuthenticatedUser, isautherizeRoles } = require('../middlewares/authenticate');
const router = express.Router();
const upload = multer();

router.route("/get_question_types").get(isAuthenticatedUser,getQuestionTypes);
router.route("/get_all_questions").get(isAuthenticatedUser,getAllQuestions);
router.route("/create_questions").post(isAuthenticatedUser,createQuestions);
router.route("/update_question").put(isAuthenticatedUser,updateQuestions);
router.route("/delete_question/:id").delete(isAuthenticatedUser,deleteQuestions);
router.route("/upload_csv_questions").post(upload.single('file'),isAuthenticatedUser,isautherizeRoles("Hr"),uploadQuestionsUsingCsv);

module.exports = router;