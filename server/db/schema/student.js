const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    age: Number,
})

exports.Student = mongoose.model('student', studentSchema);