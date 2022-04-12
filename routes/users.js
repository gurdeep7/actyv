var express = require('express');
var router = express.Router();
const User = require("../models/register.model")
var jwt = require('jsonwebtoken');
const newToken = (user) => {
  return jwt.sign({ user: user }, "secret");
};
/* GET users listing. */

require("../passport/strategy")(passport)

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/info', function(req, res, next) {
  res.status(200).json({data: "Welcome to Actyv!!"})
});
var passport = require("passport");

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});
router.post("/register",async (req, res) => {
  console.log(req.body)
  try {
    
    user = await User.create(req.body);
 
    const token = newToken(user._id)
    res.status(201).json({user,token });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message});
  }})


  router.get("/dob/:dob",async (req, res) => {
  
    try {
      
      user = await User.find({dob:req.params.dob}).lean().exec();
   
      
      res.status(201).json({user });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message});
    }})

    router.get("/virtual",async (req, res) => {
  
      try {
        
        user = await User.find().select(["first_name","last_name"]).lean().exec();
     
        
        res.status(201).json({user });
      } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message});
      }})
  

    router.get("/bytoken",passport.authenticate("jwt",{session:true}), async(req,res) => {
      try {
        res.send(req.user);
       
      } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message});
      }
    })
    
  
module.exports = router;
