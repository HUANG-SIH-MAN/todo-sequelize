const express = require('express')
const { authenticator } = require('../middleware/auth')
const router = express.Router()

const user = require('./modules/user')
const home = require('./modules/home')
const todo = require('./modules/todo')

router.use('/users', user)
router.use('/todos', authenticator, todo)
router.use('/', authenticator, home)

module.exports = router