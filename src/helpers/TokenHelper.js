const jwt = require('jsonwebtoken')

module.exports = {
    signToken(payload, secret, options) {
        const token = jwt.sign(payload, secret, options)
        return token
    },

    isTokenValid(token, secret) {
        const decoded = jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                console.log('erro')
                return
            }
            delete decoded["iat"]
            delete decoded["exp"]
            return decoded
        });
        return decoded
    },

    wasTokenSent(headers) {
        const authHeader = headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
        if (!token) {
            console.log('token faltando');
            return
        }
        return token
    },
}