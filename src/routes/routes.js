const express = require('express')
const router = express.Router()

const ListController = require('../controllers/ListController')

router.get(
    '/lists',
    ListController.getLists
)

module.exports = router
