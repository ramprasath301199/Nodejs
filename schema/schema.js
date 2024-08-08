const mongoose = require("mongoose")
const User = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    },
    Regno: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Student", User);;