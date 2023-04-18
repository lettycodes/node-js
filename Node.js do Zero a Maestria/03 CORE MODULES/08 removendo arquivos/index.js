const fs = require('fs')

fs.unlink('arquivo.txt', function(err) {

    if(err) {
        console.log(err)
        return
    }

    console.log("Arquivo removido!")
});

// é necessário criar o arquivo.txt para que o mesmo seja excluído