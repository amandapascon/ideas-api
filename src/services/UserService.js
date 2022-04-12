const UserRepository = require('../repositories/UserRepository')

module.exports = {

    async getUser() {
        const user = await UserRepository.getUser()
        return user
    }
}