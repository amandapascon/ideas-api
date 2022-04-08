const mongoose = require('mongoose');

const Lists = mongoose.Schema({
    nome: { type:String, require:true }
});

module.exports = mongoose.model('Lists', Lists);