exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sales')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {price: 15484, vin_number: '111'},
        {price: 10484, vin_number: '222'},
      ])
    })
}
