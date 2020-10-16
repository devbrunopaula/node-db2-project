const express = require('express')
const router = express.Router()
const Validation = require('../app/Middleware/validation')

const CarController = require('../app/Controllers/CarController')

router.route('/').get(CarController.index).post(CarController.create)
router
  .route('/:id')
  .get(Validation.findCarById(), CarController.show)
  .put(Validation.body(), Validation.findCarById(), CarController.update)
  .patch(Validation.body(), Validation.findCarById(), CarController.modify)
  .delete(Validation.findCarById(), CarController.remove)

module.exports = router
