const express = require('express')
const app = express()
const welcome = require('./welcomeRoutes')
const cars = require('./carRoutes')
const sales = require('./salesRoutes')

app.use('/', welcome)
app.use('/api/v1/cars', cars)
app.use('/api/v1/sales', sales)

module.exports = app
