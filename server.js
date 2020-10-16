const express = require('express')
const routes = require('./routes/routes')
const morgar = require('morgan')
const erro500 = require('./app/Middleware/errors')
const morgan = require('morgan')
const app = express()
app.use(express.json())

app.use(morgan('dev'))

app.use(routes)

app.use(erro500)
module.exports = app
