const express = require('express');
const multer = require('multer'); 
const { uploadCsv } = require('../controllers/csvController');
const router = express.Router();
const upload = multer()


router.route('/upload_csv').post(upload.single('file'),uploadCsv)

module.exports = router;