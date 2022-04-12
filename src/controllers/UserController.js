const UserService = require('../services/UserService')
const sucess = require('../helpers/SuccessResponseHelper')

module.exports = {

    async getUser(request, response) {
        const user = await UserService.getUser()
        return response.json(sucess({ user }))
    }
}