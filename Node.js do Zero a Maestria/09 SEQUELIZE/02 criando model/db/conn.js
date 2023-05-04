const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    password: 'root1234*',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.log('Conectado com sucesso com o Sequelize!')
// } catch (err) {
//     console.log('Não foi possível conectar:', err)
// }

module.exports = sequelize