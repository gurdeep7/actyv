var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/login", function (req, res, next) {
  res.render("auth", { title: "LOGIN PAGE" });
});

module.exports = router;
