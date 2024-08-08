const express = require("express")
const app = express();
const port = process.env.PORT || 3500;
const path = require("path");
const cors = require("cors");
const { logger } = require("./errorevent");
app.use(logger)
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))
app.use(cors({
  origin: 'http://localhost:3500',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use("/", require("./routes/routes"))
app.use("/post/student", require("./routes/student"))
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"))
})
app.listen(port, () => {
  console.log("server is running in http://localhost:" + port + "");
})