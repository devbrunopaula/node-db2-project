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
