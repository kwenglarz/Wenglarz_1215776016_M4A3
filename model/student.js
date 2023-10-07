const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    address: String,
    email: String,
    phone: String,
    description: String
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;