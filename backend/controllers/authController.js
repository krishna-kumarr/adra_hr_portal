const catchAsyncError = require("../middlewares/catchAsyncError")
const User = require("../models/userModel");
const sendEmail = require("../utils/email");
const ErrorHandler = require("../utils/errorHandling");
const sendToken = require("../utils/jwt");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { body, file } = req

    if (!file) {
        return next(new ErrorHandler("Profile image Not found", 401));
    }

    const { name, username, email, password, role } = body;
    const user = await User.findOne({ username })

    if (user) {
        return next(new ErrorHandler("Username already exist", 401));
    } else {
        const avatar = file.originalname;
        const newUser = await User.create({ name, username, email, password, avatar, role });
        sendToken(newUser, 201, res);

    }
});

exports.getUser = catchAsyncError(async (req, res, next) => {
    const users = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        data: users,
        message: 'user details fetched successfull'
    })
})

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next(new ErrorHandler("please enter username & password", 401));
    }

    //finding user data in database
    const user = await User.findOne({ username }).select('+password');

    if (!user) {
        return next(new ErrorHandler("User not found", 401));
    }

    if (!await user.isValidPassword(password)) {
        return next(new ErrorHandler("Invalid username or password", 401));
    }

    sendToken(user, 201, res);
})

exports.resetJwtToken = catchAsyncError(async (req, res, next) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
        return next(new ErrorHandler("No refresh token provided", 401));
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id)

    sendToken(user, 201, res);
})

exports.logOutUser = (req, res, next) => {
    res.cookie('token', null, {
        httpOnly: true,
        expires: new Date(Date.now())
    })

    res.cookie('refreshToken', null, {
        httpOnly: true,
        expires: new Date(Date.now())
    })

    res.status(200).json({
        success: true,
        message: 'logout successfull'
    })
}

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler("User not found with this email"), 404);
    }

    const resetToken = user.getResetToken();
    user.save({ validateBeforeSave: false });

    //Create reset url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reser url is as follow \n\n
    ${resetUrl} \n\n If you have not requested this email, ignore it`

    try {
        sendEmail({
            email: user.email,
            subject: "Krishnacart reset password",
            message
        })

        res.status(200).json({
            success: true,
            message: `Email send to ${user.email}`
        })
    } catch (err) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(err.message), 500);
    }
});

exports.resetPassword = catchAsyncError(async (req, res, next) => {

    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTokenExpire: {
            $gt: Date.now()
        }
    });

    if (!user) {
        return next(new ErrorHandler('password reset token is invalid or expired'), 401)
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('password does not match'), 401)
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save({ validateBeforeSave: false });

    sendToken(user, 201, res);
})