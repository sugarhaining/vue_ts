const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
})

exports.User = mongoose.model('User', userSchema);