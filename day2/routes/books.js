var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 
    try{
      
  res.status(200).send({id: 1, name: "Harry Potter", author: "J.K. Rowling"})}catch(e){
      res.status(500).json({err:e.message})
  }
});

module.exports = router;