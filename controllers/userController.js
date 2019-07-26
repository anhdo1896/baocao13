const User = require('./../models/userData')

module.exports.getUsers = async (req,res) => {
   await User.find((err,result)=>{
        if(err){
          res.send(err)
          return
        } 
        res.send(result)
    })
}

module.exports.postUser = async (req,res) => {
  let user = req.body  
  console.log(user);
  const userModel = new User(user)
  await userModel.save ((err,result)=>{
        if(err){
          res.send(err)
          return
        } 
        res.send({
          message:'Insert Success',
          newUser:user
        })
    })
}

module.exports.getUser = async (req,res) => {
  let userId = req.params.id
  console.log(userId);
  
  await User.findById(userId,(err,result)=>{
        if(err){
          res.send(err)
          return
        } 
        res.send(result)
    })
}
module.exports.deleteUser = async (req,res) => {
  let userId = req.params.id 
  console.log(userId);
  await User.findByIdAndRemove (userId,(err,result)=>{
        if(err){
          res.send(err)
          return
        } 
        res.send({
          message:'Delete Success',
          deleteUser:userId
        })
    })
}
module.exports.updateUser = async (req,res) => {
  let userId = req.params.id  
  
  await User.update({_id:userId},req.body,(err,result)=>{
        if(err){
          res.send(err)
          return
        } 
        res.send({
          message:'Update Success',
          updateUser:userId
        })
    })
}


