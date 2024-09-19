const express = require('express');
const multer = require('multer');
const { registerUser, loginUser, logOutUser, forgotPassword, resetPassword, getUser, resetJwtToken } = require("../controllers/authController");
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const router = express.Router();
const upload = multer() 


router.route('/register').post(upload.single('avatar'),registerUser);
router.route('/getuser').get(isAuthenticatedUser,getUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logOutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/refresh_token').get(resetJwtToken)


module.exports = router;