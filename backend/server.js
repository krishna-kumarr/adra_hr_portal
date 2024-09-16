const app = require('./app');
const dotenv = require('dotenv');
const path = require('path')
dotenv.config({path:path.join(__dirname,"config","config.env")})
const connectDatabase = require('./config/database');


connectDatabase().catch(console.dir);


const server = app.listen(process.env.PORT,()=>{
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error : ${err.message}`);
    console.log('Shutting down the server due to unhandledRejection error');
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error : ${err.message}`);
    console.log('Shutting down the server due to uncaughtException error');
    server.close(()=>{
        process.exit(1);
    })
})
 
