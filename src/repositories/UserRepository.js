const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {

    async getUser() {
        const user = await User.find()
        return user
    }
}