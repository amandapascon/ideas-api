const mongoose = require('mongoose');

const User = new mongoose.Schema({
    usuario: { type:String, required:true, trim:true },
    nome: { type:String, require:true },
    senha: { type:String, required:true },
});

module.exports = mongoose.model('User', User);