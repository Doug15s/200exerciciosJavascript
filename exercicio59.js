// Exercício 59: Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.

let array1 = [1, 2, 3, 4, 5];

function arrayDuplicado(array) {
    let array2 = [];
    let index2 = 0;
    for (let index1 of array) {
        array2[index2] = index1;
        index2++;
        array2[index2] = index1;
        index2++;
    }

    return array2;
}

console.log(`O array duplicado ficou assim: ${arrayDuplicado(array1)}`);