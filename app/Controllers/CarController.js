const Car = require('../Models/CarModel')

class CarController {
  async index(req, res, next) {
    try {
      const getCars = await Car.all()

      return res.status(200).json(getCars)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = new CarController()
