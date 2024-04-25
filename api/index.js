import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import listingRouter from '../api/routes/listingRouter.js'
import userRouter from '../api/routes/user-router.js'
import authRouter from '../api/routes/auth.route.js'
dotenv.config()
import cookieParser from 'cookie-parser'

const app = express();

mongoose.connect(process.env.Estate).then(()=>{
    console.log("Connected to MONGODB!");
}).catch((err) => {
    console.log(err)
})

app.use(express.json());
app.use(cookieParser());

app.listen(3000,()=>{
    console.log('Server is running on port 3000!!!!');
}
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing', listingRouter);


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})