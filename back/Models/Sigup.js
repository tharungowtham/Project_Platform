const mongoose = require('mongoose')
const signupSchema = new mongoose.Schema({
    Email:{
        type: String,
        required:true,
    },
    Password:{
        type: String,
        required:true,
    },
})
const signup = mongoose.model('siginup',signupSchema);
module.exports = signup;