// Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.

let array1 = [1, 2, 3, 4, 5];

function arrayQuadrado(array) {
    let array2 = [];
    let x = 0;
    for (let i of array) {
        array2[x] = i ** 2;
        x++;
    }

    return array2;
}

console.log(`O array com todos os números ao quadrado ficou assim: ${arrayQuadrado(array1)}.`);