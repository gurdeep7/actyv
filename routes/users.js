var express = require('express');
var router = express.Router();
const User = require("../models/register.model")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/info', function(req, res, next) {
  res.status(200).json({data: "Welcome to Actyv!!"})
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});
router.post("/register",async (req, res) => {
  console.log(req.body)
  try {
    
    user = await User.create(req.body);
 
    
    res.status(201).json({user });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message});
  }})


  router.get("/:dob",async (req, res) => {
  
    try {
      
      user = await User.find({dob:req.params.dob}).lean().exec();
   
      
      res.status(201).json({user });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message});
    }})
  
module.exports = router;
