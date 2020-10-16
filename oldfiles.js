// Table
exports.up = async function (knex) {
  await knex.schema.createTable('cars', (table) => {
    table.text('vin').unique().notNull().primary()
    table.integer('stock_number').notNull().unique()
    table.text('make').notNull()
    table.text('model').notNull()
    table.float('mileage').notNull()
    table.integer('year').notNull()
    table.text('color')
    table.text('transmission')
    table.text('title')
    table.datetime('Sold_At')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
}

//seed
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

// knex config
const knex = require('knex')
const knexfile = require('../knexfile')

module.exports = knex(knexfile)

// db
module.exports = {
  client: 'postgresql',
  connection: {
    database: 'nodedb2',
    user: 'postgres',
    password: '',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './database/migrations',
  },
}
