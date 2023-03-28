/*
Letícia Silva tem - quase - 29 anos, pesa 55 kg
tem 1.7 de altura e seu IMC é de 19.031141868512112
Letícia nasceu em 1994
*/

const nome = 'Letícia';
const sobrenome = 'Silva';
const idade = 29;
const peso = 55;
const alturaEmM = 1.70; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;


// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);