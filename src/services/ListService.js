const ListRepository = require('../repositories/ListRepository')

module.exports = {
    async getLists(id_user) {
        const lists = await ListRepository.getLists(id_user)
        return lists
    }
}