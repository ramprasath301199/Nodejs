const connect = require("../connections/mongo")
const express = require("express");
const app = express();
const router = express.Router();
const { logevents } = require("../errorevent");
const path = require("path");
const student = async (req, res) => {
    var response = await connect.conect(req.body);
    logevents(`${req.url}\t${req.method}\t${response}`)
    response === "success" ? res.status(304).redirect("/login.html") : res.send(response);
}
const login = async (req, res) => {
    let response = await connect.login(req.body)
    response.map(data => {
        console.log(data);
    })
}
module.exports = { student, login };