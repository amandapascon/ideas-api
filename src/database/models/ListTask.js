const mongoose = require('mongoose');

const ListTask = mongoose.Schema({
    id_user: {type:mongoose.Schema.Types.ObjectId, required:true, ref: 'User'},
    id_list: {type:mongoose.Schema.Types.ObjectId, required:true, ref: 'List'},
    id_task: {type:mongoose.Schema.Types.ObjectId, required:true, ref: 'Task'},
});

module.exports = mongoose.model('ListTask', ListTask);