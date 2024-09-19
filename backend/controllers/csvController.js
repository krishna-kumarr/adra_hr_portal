const catchAsyncError = require('../middlewares/catchAsyncError')
const ErrorHandler = require('../utils/errorHandling');
const csv = require('csvtojson');
const { sha256 } = require('js-sha256');


exports.uploadCsv = catchAsyncError(async (req, res, next) => {
    const { file } = req;

    if (!file) {
        return next(new ErrorHandler("No file found", 404))
    }

    const jsonArray = await csv().fromString(req.file.buffer.toString());
    console.log(jsonArray)
    const validatingHashing = jsonArray.map((v) => {
        const obj = { ...v }
        if (v.user_pwd != "NULL") {
            const hashUserPwd = sha256(v.user_pwd)
            obj.hashed_pwd_by_node = hashUserPwd

            if (hashUserPwd === v.hashed_pwd) {
                obj.match = "success"
            } else {
                obj.match = "failed"
            }
            return obj
        }else{
             obj.match = "no password"
             return obj
        }
    })

    res.status(200).json({
        success: true,
        data: validatingHashing,
        message: "csv uploaded successfully"
    })
})