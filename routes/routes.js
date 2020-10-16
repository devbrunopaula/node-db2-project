const express = require('express')
const app = express()
const welcome = require('./welcomeRoutes')
const cars = require('./carRoutes')

app.use('/', welcome)
app.use('/api/v1/cars', cars)

module.exports = app
