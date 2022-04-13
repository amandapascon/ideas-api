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

router.post(
    '/register',
    UserController.createUser
)

router.post(
    '/login',
    UserController.createSession
)

module.exports = router
