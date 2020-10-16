const db = require('../../database/config')

class CarModel {
  async all() {
    try {
      const cars = await db.select('*').from('cars')
      return cars
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new CarModel()
