const TokenHelper = require("../helpers/TokenHelper")

const token_secret='a55de6fb2d689937c7a9808d91ba5fb7e138a8976fbb47aca84618b378143785'

module.exports = {

  verifyToken(request, response, next) {
    const token = TokenHelper.wasTokenSent(request.headers);
    const decoded = TokenHelper.isTokenValid(
      token,
      token_secret
    )
    request.tokenData = decoded
    next()
  },

}