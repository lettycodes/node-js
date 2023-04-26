const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

const products = [
    {
      id: "1",
      title: "CD",
      price: 29.9,
    },
    {
      id: "2",
      title: "Cadeira gamer",
      price: 1000,
    },
    {
      id: "3",
      title: "Ventilador",
      price: 99,
    },
  ];
  
app.get('/', (req, res) => {
    res.render('home', {products})
})

app.get('/product/:id', (req, res) => {
    const product = products[parseInt(req.params.id) -1]
    
    res.render('product', {product})
})

app.listen(3000)