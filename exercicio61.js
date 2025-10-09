// Exercício 61: Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos os números.

let array1 = [1, 9, 36, 4, 25];

function arrayRaiz(array) {
    let array2 = [];
    let x = 0;
    for (let i of array) {
        array2[x] = i ** 0.5;
        x++;
    }

    return array2;
}

console.log(`O array com a raiz quadrada de todos os números ficou assim: ${arrayRaiz(array1)}.`);