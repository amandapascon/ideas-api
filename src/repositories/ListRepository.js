const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {

    async getLists(id_user) {
        const user = await User.findById({_id:id_user})
        console.log(user.lists);
        return user.lists
    }

}