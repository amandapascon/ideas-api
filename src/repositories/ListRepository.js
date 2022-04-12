const mongoose = require('mongoose')
const Lists = mongoose.model('Lists')

module.exports = {

    async getLists() {
        const lists = await Lists.find()
        return lists
    }

}