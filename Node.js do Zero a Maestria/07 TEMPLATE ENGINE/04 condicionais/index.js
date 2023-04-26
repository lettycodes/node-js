const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', function (req, res) {

  const user = {
    name: "Leticia",
    surname: "Silva",
    age: 28
  }

  const palavra = "Teste"

  const auth = true // caso seja false, a parte de "área de membros" desaparece da tela

  res.render('home', { user: user, palavra, auth })
})

app.listen(3000)