const Car = require('../Models/CarModel')

class CarController {
  async index(req, res, next) {
    try {
      const getCars = await Car.all()

      res.status(200).json(getCars)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  async show(req, res, next) {
    const {id} = req.params
    try {
      const getCarsById = await Car.getById(id)
      res.status(200).json(getCarsById)
    } catch (error) {
      console.log('Car Controller Error', error)
      next(error)
    }
  }

  async create(req, res, next) {
    const {
      vin,
      stock_number,
      make,
      model,
      mileage,
      year,
      color,
      transmission,
      title,
      Sold_At,
    } = req.body

    const newCar = {
      vin,
      stock_number,
      make,
      model,
      mileage,
      year,
      color,
      transmission,
      title,
      Sold_At,
    }

    try {
      const [getCarsById] = await Car.createCar(newCar)

      return res.status(201).json(getCarsById)
    } catch (error) {
      res.status(404).json({error: 'Could not locate a car with that Vin#'})
    }
  }

  async update(req, res, next) {
    const {
      vin,
      stock_number,
      make,
      model,
      mileage,
      year,
      color,
      transmission,
      title,
      Sold_At,
    } = req.body

    const newCar = {
      vin,
      stock_number,
      make,
      model,
      mileage,
      year,
      color,
      transmission,
      title,
      Sold_At,
    }

    try {
      const [updateCar] = await Car.update(newCar, vin)
      res.status(200).json(updateCar)
    } catch (error) {
      next(error)
    }
  }

  async modify(req, res, next) {
    try {
      const [updateCar] = await Car.modify(req.body, req.params.id)
      res.status(200).json(updateCar)
    } catch (error) {
      console.log('CarController Error', error)
      next(error)
    }
  }
  async remove(req, res, next) {
    const {id} = req.params
    try {
      await Car.remove(id)
      res.status(200).json({message: `Car with VIN# ${id} has been removed.`})
    } catch (error) {
      console.log('CarController Error', error)
      next(error)
    }
  }
}

module.exports = new CarController()
