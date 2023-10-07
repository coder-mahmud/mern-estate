import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Database connected')
}).catch(err => console.log(err))

const app = express();
app.use(express.json())

app.get('/', (req,res) =>{
  // console.log(req.body)
  res.status(200).json({"message":"app running"})
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);


app.use((err,req,res,next) =>{
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal server error!";

  return res.status(statuscode).json({
    success:false,
    message,
    statuscode
  });


});


app.listen(3000, () =>{
  console.log('Server is running!!!!')
})