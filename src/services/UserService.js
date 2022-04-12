const UserRepository = require('../repositories/UserRepository')
const EncryptHelper = require('../helpers/EncryptHelper')

module.exports = {

    async getUser() {
        const user = await UserRepository.getUser()
        return user
    },

    async createUser(usuario, nome, senha) {
        const findUser = await UserRepository.findUser(usuario)
        if (findUser) {
            console.log("Já existe um Login")
            return
        }
        const senhaCripto = await EncryptHelper.encrypt(senha)
        const user = await UserRepository.createUser(usuario, nome, senhaCripto)
        if (user) {
            return user
        }
        else {
            console.log('Erro')
            return
        }
    },

    async createSession(usuario, senha) {
        const findUser = await UserRepository.findUser(usuario)
        if(!findUser) {
            console.log("Usuário não encontrado")
            return
        }
        // ToDo 
    }
}