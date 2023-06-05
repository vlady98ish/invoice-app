const express = require('express')
const router = express.Router()
const GeneralController = require('../controller/GeneralController')


//Login
router.post('/login',GeneralController.login)


//Register
router.post('/register',GeneralController.register)


//Logout
router.post('/logout',GeneralController.logout)


module.exports = router