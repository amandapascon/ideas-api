const ListService = require('../services/ListService')
const success = require("../helpers/SuccessResponseHelper")

module.exports = {

    async getLists(request, response) {
        const { id_user } = request.tokenData
        const lists = await ListService.getLists(id_user)
        return response.json(success({ lists }))
    }

}