// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

let fibonacci = 0;
let anterior1 = 0;
let anterior2 = 1;

console.log(fibonacci);

for (let i=1; i<10; i++) {
    anterior1 = fibonacci;
    fibonacci = anterior1 + anterior2;
    console.log(fibonacci);
    anterior2 = anterior1;
}