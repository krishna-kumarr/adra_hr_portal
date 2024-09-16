const sendToken = (user, statusCode, res) => {

    //creating jwt token
    const token = user.getJwtToken();
    const refreshToken = user.getRefreshJwtToken()

    //setting cookies
    const options = {
        httpOnly: true,
        sameSite: 'strict'
    }

    res.status(statusCode).cookie('token', token, options).cookie('refreshToken', refreshToken, options).json({
        success: true,
        data: {
            data: user,
            message: "User registered successfully"
        }

    })
}

module.exports = sendToken;