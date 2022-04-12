const express = require('express')
const router = express.Router()

const ListController = require('../controllers/ListController')
const UserController = require('../controllers/UserController')

router.get(
    '/lists',
    ListController.getLists
)

router.get(
    '/user',
    UserController.getUser
)

module.exports = router
