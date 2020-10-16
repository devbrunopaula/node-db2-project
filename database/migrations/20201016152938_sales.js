exports.up = async function (knex) {
  await knex.schema.createTable('sales', (table) => {
    table.increments('id')

    table.integer('price')
    table
      .text('vin_number')
      .references('vin')
      .inTable('cars')
      .onDelete('CASCADE')
      .index()
    table.timestamps(true, true)
  })
}

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists('sales')
}
