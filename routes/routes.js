const express = require("express")
const router = express.Router();
const path = require("path");
router.get("^/$|/index(.html)?", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "index.html"))
})
router.get("/about(.html)?", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "about.html"))
})
router.get("/contact(.html)?", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "contact.html"))
})
router.get("/blogs(.html)?", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "blogs.html"))
})
router.get("/login(.html)?", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "login.html"))
})
module.exports = router