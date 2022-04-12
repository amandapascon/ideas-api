const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {

    async getUser() {
        const user = await User.find().select('-senha')
        return user
    },

    async findUser(usuario) {
        const user = await User.findOne({
            usuario: usuario
        })
        return user
    },

    async createUser(usuario, nome, senha) {
        const user = await User.create({
            usuario: usuario,
            nome: nome,
            senha: senha
        })
        return user
    }
}