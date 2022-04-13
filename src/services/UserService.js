const UserRepository = require('../repositories/UserRepository')
const EncryptHelper = require('../helpers/EncryptHelper')
const TokenHelper = require('../helpers/TokenHelper')

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
        const token_secret='a55de6fb2d689937c7a9808d91ba5fb7e138a8976fbb47aca84618b378143785'
        const expiresIn = '99999 minutes'

        const findUser = await UserRepository.findUser(usuario)
        if(!findUser) {
            console.log("Usuário não encontrado")
            return
        }
        await EncryptHelper.compare(senha, findUser.senha)
        const token = TokenHelper.signToken(
            { id_user: findUser._id, nome_user: findUser.nome },
            token_secret,
            { expiresIn }
        )
        return token
    }
}