// Exercício 35: Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2).


function triangular(numero) {
    return numero * (numero + 1) / 2;
}

for (let i=1; i<=10; i++) {
    let numeroTriangular = triangular(i);
    console.log(`O número ${i} triangular é ${numeroTriangular}!`);
}