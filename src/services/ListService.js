const ListRepository = require('../repositories/ListRepository')

module.exports = {
    async getLists() {
        const lists = await ListRepository.getLists()
        return lists
    }
}