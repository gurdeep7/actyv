require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/register.model")
const newToken = (user) => {
  return jwt.sign({ user: user }, "secret");
};
//Registering the user
const register = async(req,res)=>{
    console.log(req.body)
    try {
      
      user = await User.create(req.body);
   
      const token = newToken(user._id)
      res.status(201).json({user,token });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message});
    }
}
//Get detail of id by token
const bytoken = async(req,res)=>{
    try {
        res.send(req.user);
       
      } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message});
      }
}
//get first name and last name of user
const virtual = async(req,res)=>{
    try {
        
        user = await User.find().select(["first_name","last_name"]).lean().exec();
     
        
        res.status(201).json({user });
      } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message});
      } 
}

const byDob = async(req,res)=>{

    try {
      
        user = await User.find({dob:req.params.dob}).lean().exec();
     
        
        res.status(201).json({user });
      } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message});
      }
}

module.exports={register, bytoken, virtual, byDob}