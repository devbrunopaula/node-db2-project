const db = require('../../database/config')

class Validation {
  findCarById() {
    return async (req, res, next) => {
      const {id} = req.params
      const [cars] = await db.select('*').from('cars').where('vin', id)

      if (!cars)
        return res.status(404).json({
          error: `Could not locate a car with the vin # ${id}.`,
        })

      try {
        next()
      } catch (error) {
        res.status(400).json(error.message)
      }
    }
  }

  body() {
    return async (req, res, next) => {
      if (Object.keys(req.body).length === 0)
        return res.status(400).json({error: 'Body request may not be empty...'})

      try {
        next()
      } catch (error) {
        res.status(400).json(error.message)
      }
    }
  }
}

module.exports = new Validation()
