const mongoose = require('mongoose');

const Tasks = mongoose.Schema({
    isCheck: { type:Boolean, require:true, default:false },
    dc: { type:String, require:true }
});

module.exports = mongoose.model('Tasks', Tasks);