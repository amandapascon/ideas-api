const mongoose = require('mongoose');

const User = new mongoose.Schema({
    usuario: { type:String, required:true, trim:true },
    nome: { type:String, require:true },
    senha: { type:String, required:true },
    lists:[new mongoose.Schema({
        nome: { type:String, require:true },
        tasks: [new mongoose.Schema({
            isCheck: { type:Boolean, require:true, default:false },
            dc: { type:String, require:true },
        })],
    })],
});

module.exports = mongoose.model('User', User);