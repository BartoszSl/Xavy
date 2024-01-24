const mongoose = require('mongoose')

const Auth = new mongoose.Schema({
    id: String,
    firstName: String,
    surName: String,
    email: String,
    password: String,
    phoneNum:String, 
    image: String, 
    money: Number,
    cart_id: String
})

module.exports= mongoose.model('auths',Auth)