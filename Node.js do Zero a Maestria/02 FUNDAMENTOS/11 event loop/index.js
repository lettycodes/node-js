function a() {
    console.log("Executando a()")
}

function b() {
    console.log("Executando b()")
}

function c() {
    console.log("Executando c()")
    a()
    b()
}

c()

// O node lê nosso código de cima pra baixo, garantindo a execução de uma instrução após a outra, como elas estão ordenadas