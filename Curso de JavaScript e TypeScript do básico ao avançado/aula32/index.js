const pessoa = {
    nome: 'Letícia',
    sobrenome: 'Silva',
    idade: 28,
    endereco: {
      rua: 'Rua dos Sonhos',
      numero: 24
    }
  };
  
  // Atribuição via desestruturação
  const { nome, sobrenome, ...resto } = pessoa;
  console.log(nome, resto);