const db = require('../../database/config')

class CarModel {
  async all() {
    try {
      const cars = await db
        .select('*')
        .from('cars')
        .orderBy('created_at', 'desc')
      return cars
    } catch (error) {
      next(error)
    }
  }
  async getById(id) {
    try {
      const [cars] = await db.select('*').from('cars').where('vin', id)
      return cars
    } catch (error) {
      next(500)
    }
  }

  async createCar(newCar) {
    try {
      const [carsId] = await db('cars').returning('vin').insert(newCar)

      return await db.select('*').from('cars').where('vin', carsId)
    } catch (error) {
      console.log('Car Model Error', error)
      next(error)
    }
  }
  async update(updatedCar, vin) {
    try {
      const [carsId] = await db('cars')
        .where('vin', vin)
        .update(updatedCar)
        .returning('vin')

      return await db.select('*').from('cars').where('vin', carsId)
    } catch (error) {
      console.log('Car Model Error', error)
      next(error)
    }
  }

  async modify(updatedCar, vin) {
    console.log('model', updatedCar)

    const currentProps = await this.getById(vin)
    console.log('current', currentProps)

    const newUpdatedCar = {
      vin: updatedCar.vin || currentProps.vin,
      stock_number: updatedCar.stock_number || currentProps.stock_number,
      make: updatedCar.make || currentProps.make,
      model: updatedCar.model || currentProps.model,
      mileage: updatedCar.mileage || currentProps.mileage,
      year: updatedCar.year || currentProps.year,
      color: updatedCar.color || currentProps.color,
      transmission: updatedCar.transmission || currentProps.transmission,
      title: updatedCar.title || currentProps.title,
      Sold_At: updatedCar.Sold_At || currentProps.Sold_At,
    }
    console.log('patch', newUpdatedCar)
    try {
      const [carsId] = await db('cars')
        .where('vin', vin)
        .update(newUpdatedCar)
        .returning('vin')

      return await db.select('*').from('cars').where('vin', carsId)
    } catch (error) {
      console.log('Car Model Error', error)
      next(error)
    }
  }

  async remove(id) {
    try {
      const removeCarId = await db('cars').where('vin', id).del()

      return await db.select('*').from('cars').where('vin', removeCarId)
    } catch (error) {
      console.log('Car Model Error', error)
      next(error)
    }
  }
}

module.exports = new CarModel()
