const chalk = require ('chalk')

const nota = 5

if(nota >= 7) {
    console.log(chalk.green("Parabéns, você está aprovado!!!"))
} else {
    console.log(chalk.bgRed.black("Oh não... Você precisa fazer a prova de recuperação!"))
}