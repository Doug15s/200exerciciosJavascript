// Exercício 55: Escreva uma função que retorne o menor número em um array de números.

let array = [1010, 10001, 31, 200, 10, 80, 7];
let menor = Number.MAX_SAFE_INTEGER;

function retornaMenor(numero) {
    if (menor > numero) {
        menor = numero;
    }

}

for (let i = 0; i <= array.length; i++) {
    retornaMenor(array[i]);
    console.log(menor);
}

console.log(`O menor valor do array de números é o ${menor}.`);