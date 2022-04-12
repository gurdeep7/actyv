var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
 

      
  res.status(200).send({id: 1, name: "Harry Potter", author: "J.K. Rowling"})
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/add', function (req, res, next) {

  console.info(req.body);
  res.status(200).json({ message:  "Book Saved Successfully" });
});

router.get("/add",function (req, res, next) {
  res.render('bookAdd', { title: 'ADD BOOK' });

  
})
module.exports = router;