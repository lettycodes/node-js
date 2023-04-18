// módulo externo
const minimist = require ("minimist")

// módulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)

// no terminal eu digito: node index.js --a=5 --b=10