const minimist = require ("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args ['profissao']

console.log(nome, profissao)
console.log(`O nome da pessoa é ${nome} e sua profissão é ${profissao}!`)

// no terminal eu digito: node index.js --nome=Leticia --profissao=Programadora