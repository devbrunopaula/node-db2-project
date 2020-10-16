const express = require('express')
const router = express.Router()

const CarController = require('../app/Controllers/CarController')

router.route('/').get(CarController.index)

module.exports = router
