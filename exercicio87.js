// Exercício 87: Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e, em seguida, filtre apenas os números que são múltiplos de 5.

let array1 = [2,4,6,8,10,12,14,16,18,20];
let array2 = [1,3,5,7,9,11,13,15,17,19];
let array3 = [];
let index1 = 0;
let index2 = 0;

for (let i of array1) {
    if (i != array2[index1]) {
        array3[index2] = i;
        array3[index2 + 1] = array2[index1];
        index1++;
        index2+=2;
    } else {
        array3[index2] = i;
        index1++;
        index2++;
    }
    
    
}

for (let x of array3) {
    if (x % 5 == 0) {
        console.log(`O número ${x} é múltiplo de 5.`)
    }

}