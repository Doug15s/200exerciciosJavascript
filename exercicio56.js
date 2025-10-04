// Exercício 56: Escreva uma função que retorne o maior número em um array de números.

let array = [10100, 100010, 310000, 2000000909090909, 10000000, 8000000000, 70000000000];
let maior = Number.MIN_SAFE_INTEGER;

function retornaMaior(numero) {
    if (maior < numero) {
        maior = numero;
    }

}

for (let i = 0; i <= array.length; i++) {
    retornaMaior(array[i]);
}

console.log(`O maior valor do array de números é o ${maior}.`);