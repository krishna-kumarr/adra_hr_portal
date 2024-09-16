const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorMiddleWare = require('./middlewares/error');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 

const userRouter = require('./routes/auth');
const scheduleRouter = require('./routes/scheduleRoutes');


//Route paths 
app.use('/api/v1',userRouter);
app.use('/api/v1',scheduleRouter)

//handling errors should be used in last
app.use(errorMiddleWare)

module.exports = app;