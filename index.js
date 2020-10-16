const app = require('./server')

const PORT = process.env.PORT || 9000

app.listen(PORT, () =>
  console.log(`Server Runiing on http://localhost:${PORT}`)
)
