import User from "../models/user.model.js";

import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/Error.js";

export const authController  = async(req,res, next) =>{
  const {username, email, password} = req.body;
  //console.log(username, email, password);

  /*
  const foundUser = await User.findOne ({ "username" : username });
  if(foundUser){
    res.status(200).json({"message":"Username already taken"})
    return;
  }

  const foundEmail = await User.findOne ({ "email" : email });
  if(foundEmail){
    res.status(200).json({"message":"email aready used!"})
    return;
  }

  */
  const hashedPass = bcrypt.hashSync(password, 10);
  const newUser = new User({username, email, password:hashedPass});
  await newUser.save()
  .then(result =>{
    res.status(200).json({"message":"Auth route!", data: result})
  }).catch((error) => next(errorHandler(error.status, error.message)))
  ;
  //res.status(200).json({"message":"Auth route!"})
}

