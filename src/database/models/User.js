const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: { type:String, required:true, trim:true },
    senha: { type:String, required:true },
});

module.exports = mongoose.model('User', User);