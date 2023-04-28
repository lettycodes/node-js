const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view-engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("home")
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234*',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log("Conexão com o MySQL bem sucedida!")

    app.listen(3000)
})