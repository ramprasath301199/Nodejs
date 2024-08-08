const express = require("express")
const router = express.Router();
const path = require("path");
const StdCtrl = require("../controlers/studentcontroler")
router.post("/", StdCtrl.student)
router.post("/login", StdCtrl.login)
module.exports = router;