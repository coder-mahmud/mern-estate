export const userGeneral = (req,res) =>{
  const {username, email, password} = req.body;
  // console.log(username, email, password);
  res.status(200).json({"message":"User route!"})
}
