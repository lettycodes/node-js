const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
  const items = ["Item a", "Item b", "Item c"]

  res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js .......",
    comments: "4"
  }
  res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "Teste",
      comments: 4
    },
    {
      title: "Aprender Java",
      category: "Java",
      body: "Teste",
      comments: 6
    },
    {
      title: "Aprender Swift",
      category: "Swift",
      body: "Teste",
      comments: 2
    }
  ]

  res.render("blog", {posts})
})

app.get('/', function (req, res) {

  const user = {
    name: "Leticia",
    surname: "Silva",
    age: 28
  }

  const palavra = "Teste"

  const auth = false 

  const approved = true

  res.render('home', { user: user, palavra, auth, approved })
})

app.listen(3000)