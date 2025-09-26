// Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.

for (let i=1; i <= 100; i++) {
    if ((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0)) {
        console.log(i);
    }
    if ((i == 2) || (i == 3) || (i == 5) || (i == 7)) {
        console.log(i);
    }
}