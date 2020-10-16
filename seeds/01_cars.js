// const makeFakeCars = require('./carFaker')
const faker = require('faker')

const makeFakeCars = () => ({
  vin: faker.vehicle.vin(),
  make: faker.vehicle.manufacturer(),
  model: faker.vehicle.model(),
  year: faker.date.between(1990, 2020),
  model: faker.vehicle.model(),
  year: faker.random.number({min: 1990, max: 2021}),
  stock_number: faker.random.number({min: 100, max: 3000}),
  color: faker.commerce.color(),
  transmission: faker.helpers.randomize(['Automatic', 'Manual']),
  title: faker.helpers.randomize(['Clean', 'Rebuilt', 'Flood', 'Salvage']),
  mileage: faker.random.number({min: 566, max: 158415}),
  Sold_At: null,
})

exports.seed = function (knex) {
  return knex('cars')
    .del()
    .then(function () {
      let fakeCars = []
      let needFakeCars = 20
      for (let i = 0; i < needFakeCars; i++) {
        fakeCars.push(makeFakeCars())
      }
      console.log(fakeCars)
      return knex('cars').insert(fakeCars)
    })
}
