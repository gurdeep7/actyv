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
const { register, bytoken, virtual, byDob } = require('../controllers/user.controller');

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});
router.post("/register",register)


  router.get("/dob/:dob",byDob)

    router.get("/virtual",virtual)
  

    router.get("/bytoken",passport.authenticate("jwt",{session:true}),bytoken)
    
  
module.exports = router;
