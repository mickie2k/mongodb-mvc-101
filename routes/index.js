const express = require('express')

const router = express.Router()
const userController = require('../controllers/UserController')

router.post('/create-user', userController.createUser)
router.post('/order-user', userController.orderUser)
router.get('/user', userController.getUser)

router.get('/', (req, res) => {
    res.send('Hello World!')
})
  
module.exports = router