const mongoose = require('mongoose');



const authSchema = mongoose.Schema({
    image: String,
    name: String,
    email: String,
    password: String
});



const AuthModel = mongoose.model('user', authSchema);



module.exports = { AuthModel };