const db = require('../../database/config')

class CarModel {
  async all() {
    try {
      const sales = await db.select('*').from('sales')
      return sales
    } catch (error) {
      console.log('Sales Model Error', error)
      Next(error)
    }
  }

  async getById(id) {
    try {
      const sales = await db
        .select('*')
        .from('cars')
        .fullOuterJoin('sales', 'cars.vin', 'sales.vin_number')
        // .on('cars.vin', 'sales.vin_number')
        .where('cars.vin', id)
      return sales
    } catch (error) {
      console.log('Sales Model Error', error)
      Next(error)
    }
  }
}

module.exports = new CarModel()
