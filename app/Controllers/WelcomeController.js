class WelcomeController {
  index(req, res, next) {
    res.status(200).send(`<h1>Welcome to Cars API</h1>`)
  }
}

module.exports = new WelcomeController()
