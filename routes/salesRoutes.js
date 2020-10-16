const express = require('express')
const router = express.Router()

const SalesController = require('../app/Controllers/SalesController')

router.route('/').get(SalesController.index)
router.route('/:id').get(SalesController.show)

module.exports = router
