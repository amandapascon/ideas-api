const jwt = require('jsonwebtoken')

module.exports = {
    signToken(payload, secret, options) {
        const token = jwt.sign(payload, secret, options)
        return token
    },
}