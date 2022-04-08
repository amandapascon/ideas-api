const mongoose = require('mongoose');

const UserList = mongoose.Schema({
    id_user: {type:mongoose.Schema.Types.ObjectId, required:true, ref: 'User'},
    id_list: {type:mongoose.Schema.Types.ObjectId, required:true, ref: 'List'},
});

module.exports = mongoose.model('UserList', UserList);