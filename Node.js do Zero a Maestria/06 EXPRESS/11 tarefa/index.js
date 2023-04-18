const express = require('express')
const app = express()
const port = 3000 // porta 5000 está em uso (não sei pelo o que), então precisei usar a 3000

const projectsRoutes = require('./projects')

app.use(express.static('public'))

app.use('/projects', projectsRoutes)

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})