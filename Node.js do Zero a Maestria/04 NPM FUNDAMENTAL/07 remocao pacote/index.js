const _ = require('lodash')
const chalk = require('chalk')

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)

console.log(chalk.bgRed.bold(diff))

// o comando npm uninstall lodash foi utilizado para remover o lodash do projeto
// com esse comando o lodash também foi removido do package.json