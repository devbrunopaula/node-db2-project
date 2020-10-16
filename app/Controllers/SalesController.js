const Sales = require('../Models/SalesModel')
class SalesController {
  async index(req, res, next) {
    const getAll = await Sales.all()
    res.status(200).send(getAll)
  }
  async show(req, res, next) {
    const salesByVin = await Sales.getById(req.params.id)
    res.status(200).json(salesByVin)
  }
}

module.exports = new SalesController()
