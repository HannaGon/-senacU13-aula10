let cores = require("./data/crayola.json")

function buscaNome(nome){
    for (let atual of cores){
        if (atual.name.includes(nome)){
            console.log(atual)
        }
        else{}
    }
}
buscaNome("Blue")