const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {

  const user = {
    name: "Leticia",
    surname: "Silva",
    age: 28
  }

  const palavra = "Teste"

  res.render('home', {user: user, palavra})
})

app.listen(3000)