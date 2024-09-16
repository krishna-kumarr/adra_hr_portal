const express = require('express');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const { createSchedule, updateSchedule } = require('../controllers/scheduleController');
const router = express();

router.route("/create_schedule").post(isAuthenticatedUser,createSchedule)
router.route("/update_schedule").post(isAuthenticatedUser,updateSchedule)



module.exports = router;