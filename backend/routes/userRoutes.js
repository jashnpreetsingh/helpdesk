const express = require('express')
const router = express.Router()
const {resgisterUser, loginUser, getMe} = require('../controllles/userController.js')


const protect = require('../middleware/authMiddleware.js')

router.post('/', resgisterUser)

router.post('/login', loginUser)

router.post('/me', protect, getMe )

module.exports = router