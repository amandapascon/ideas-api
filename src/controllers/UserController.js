const UserService = require('../services/UserService')
const sucess = require('../helpers/SuccessResponseHelper')

module.exports = {

    async getUser(request, response) {
        const user = await UserService.getUser()
        return response.json(sucess({ user }))
    },

    async createUser(request, response) {
        const { usuario, nome, senha } = request.body
        const user = await UserService.createUser(usuario, nome, senha)
        return response.json(sucess({ user }))
    },

    async createSession(request, response) {
        const { usuario, senha } = request.body
        const token = await UserService.createSession(usuario, senha)
        return response.json(sucess({ token }, "Usuário Logado"))
    }
}