// Exercício 63: Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número.

function arrayPrimos(numero) {
    let array = [];
    let index = 0;
    for (let i = 0; i < numero; i++) {
        if ((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0) || (i == 2) || (i == 3) || (i == 5) || (i == 7)) {
            array[index] = i;
            index++;
        }
    }

    return array;
}

let numero = parseInt(prompt("Digite um número qualquer: "));

console.log(`Os números primos até o número ${numero} são: ${arrayPrimos(numero)}.`);