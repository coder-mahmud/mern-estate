import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(express.json())

app.get('/', (req,res) =>{
  console.log(req.body)
  res.status(200).json({"message":"app running"})
})


app.listen(3000, () =>{
  console.log('Server is running!!!!')
})