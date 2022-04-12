const ListService = require('../services/ListService')
const success = require("../helpers/SuccessResponseHelper")

module.exports = {

    async getLists(request, response) {
        const lists = await ListService.getLists()
        return response.json(success({ lists }))
    }

}