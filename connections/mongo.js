const mongoose = require('mongoose');
const Student = require("../schema/schema");
const conect = async (data) => {
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/Users");
        var newStudent = new Student({
            Name: data.name,
            Email: data.email,
            Mobile: data.mobile,
            Regno: data.regno
        });
        var save = await newStudent.save();
        return "success";
    } catch (error) {
        console.log(error);
        return error;
    }
}
const login = async () => {
    try {
        var db = await mongoose.connect("mongodb://127.0.0.1:27017/Users");
        var data = await Student.find({})
        return data;
    } catch (error) {
        console.log(error);
    }
}
module.exports = { conect, login };