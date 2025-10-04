// Exercício 57: Escreva uma função que retorne a soma de todos os números ímpares em um array de números.

let array = [100, 95, 40, 33, 57, 15, 10, 51];
let soma = 0;

function somaImpares(numero) {
    if (numero % 2 != 0) {
        soma += numero;
    }
}

for (let i of array) {
    somaImpares(i);
}

console.log(`A soma de todos os números ímpares contidos no array é: ${soma}.`);