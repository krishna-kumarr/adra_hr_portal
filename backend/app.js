const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorMiddleWare = require('./middlewares/error');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"]
})) 


const userRouter = require('./routes/auth');
const scheduleRouter = require('./routes/scheduleRoutes');
const csvRouter = require('./routes/csv');
const questions = require('./routes/questions');


//Route paths 
app.use('/api/v1',userRouter);
app.use('/api/v1',scheduleRouter);
app.use('/api/v1',csvRouter);
app.use('/api/v1',questions);


//handling errors should be used in last
app.use(errorMiddleWare)

module.exports = app;