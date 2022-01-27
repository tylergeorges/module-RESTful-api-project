const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email:{type: String, required: true},
    birthday: {type: String, required: true},
    age:{type: Number, },

})

const User = mongoose.model('User', userSchema)

module.exports = User