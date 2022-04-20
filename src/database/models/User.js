const mongoose = require('mongoose');

const User = new mongoose.Schema({
    usuario: { type:String, required:true, trim:true },
    nome: { type:String, required:true },
    senha: { type:String, required:true },
    lists:[new mongoose.Schema({
        nome: { type:String, required:true },
        tasks: [new mongoose.Schema({
            isCheck: { type:Boolean, required:true, default:false },
            dc: { type:String, required:true },
        })],
    })],
});

module.exports = mongoose.model('User', User);