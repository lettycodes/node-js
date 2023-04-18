const fs = require('fs')
const assets = ['css','js','images','fonts','lib']

function make(dir) {
    
    dir.forEach((item) => {
    
        // criação de pastas. recursive: permite criar pastas e subpastas ao mesmo tempo
        fs.mkdir(`projeto/assets/${item}`, {recursive: true}, (err) => {

            if(err) throw err;
            console.log('Diretório criado com sucesso: ', item)
        })
    })
}

make(assets)