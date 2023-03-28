/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Letícia',
    sobrenome: 'Silva'
  };
  const b = a;
  
  b.nome = 'Helena';
  console.log(a);
  console.log(b);  