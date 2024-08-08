const path = require("path");
const date = require("date-fns")
const fspromises = require("fs").promises;
const fs = require("fs");
const uuid = require("uuid");
const logevents = async (message) => {
    console.log(message);
    var now = date.format(new Date(), "yyyy-mm-dd");
    var uid = uuid.v4();
    var log = `${now}\t${uid}\t${message}\n`
    try {
        if (!fs.existsSync(path.join(__dirname, "logs")))
            await fspromises.mkdir(path.join(__dirname, "logs"))
        await fspromises.appendFile(path.join(__dirname, "logs", "errlog.txt"), log)
    } catch (error) {
        console.log("error", error);
    }
}
const logger = (req, res, next) => {
    logevents(`${req.url}\t${req.method}`);
    next();
}
module.exports = { logevents, logger }