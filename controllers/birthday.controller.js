var express = require("express");
var router = express.Router();
const User = require("../models/register.model");

module.exports = router;

router.get("/instance", async (req, res) => {
  const today = new Date();

  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const today1 = dd + "-" + mm + "-" + yyyy;
  try {
    user = await User.find({ dob: today1 }).lean().exec();

    console.log(today1);
    res.status(201).json({ user });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
