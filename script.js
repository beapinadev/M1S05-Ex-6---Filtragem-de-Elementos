const prompt = require("prompt-sync") ({sigint: true})
const numeros = []

for(let i=0; i<5;i++){
    numeros.push(parseInt(prompt(`Digite o ${i + 1} numero: `)))
}

for(let i=0; i<5;i++){
    console.log(`O numero é ${numeros[i]}: `)
}

const soPares = numeros.filter(numeroAtual => {
    if(numeroAtual % 2 == 0){
        return true
    }
})

console.log("A lista de números pares é: ", soPares)