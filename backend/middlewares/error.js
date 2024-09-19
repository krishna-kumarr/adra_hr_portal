module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500

    if (process.env.NODE_ENV === "development") {
        let message = err.message;
        let error = new Error(message)

        if (err.name === "ValidationError") {
            message = Object.values(err.errors).map(value => value.message)
            error = new Error(message)
        }

        if (err.name === "CastError") {
            message = `Resource Not Found: ${err.path}`;
            error = new Error(message)
        }

        if (err.code === 11000) {
            message = `Email ${Object.values(err.keyValue)} already exist`;
            error = new Error(message);
            err.statusCode = 400
        }

        if (err.name === 'JSONWebTokenError') {
            message = `JSON web token is invalid. try again`;
            error = new Error(message);
            err.statusCode = 401
        }

        if (err.name === 'TokenExpiredError') {
            message = `JSON web token is expired. try again`;
            error = new Error(message);
            err.statusCode = 401
        }


        res.status(err.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error',
            data: {}
        })
    }

    if (process.env.NODE_ENV === "production") {
        let message = err.message;
        let error = new Error(message)

        if (err.name === "ValidationError") {
            message = Object.values(err.errors).map(value => value.message)
            error = new Error(message)
        }

        if (err.name === "CastError") {
            message = `Resource Not Found: ${err.path}`;
            error = new Error(message)
        }

        if (err.code === 11000) {
            message = `Email ${Object.values(err.keyValue)} already exist`;
            error = new Error(message);
            err.statusCode = 400
        }

        if (err.name === 'JSONWebTokenError') {
            message = `JSON web token is invalid. try again`;
            error = new Error(message);
            err.statusCode = 400
        }

        if (err.name === 'TokenExpiredError') {
            message = `JSON web token is expired. try again`;
            error = new Error(message);
            err.statusCode = 400
        }


        res.status(err.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error',
            data: {}
        })
    }
}