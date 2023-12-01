
let dados = {
    name : "Matheus",
    age : 22,
    produtos :{
        0: ["Mouse 2xwm ", 39.90],
        1: ["Teclado", 69.90],
        2: ["Monitor", 500.90],
        3: ["TV 100 polegadas", 1000.00]
    }
}

gerarNota(dados)

function gerarNota(dados){
    console.log(`O comprador é  ${dados.name}`)
    console.log(`A idade é  ${dados.age}`)
    console.log("------------------------")

    for(let index in dados.produtos){
        let [produtoName, produtoPreco] = dados.produtos[index]
        console.log(` ${produtoName}: R$ ${produtoPreco}`)

    }




}