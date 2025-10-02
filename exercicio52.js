// Exercício 52: Escreva uma função que calcule o n-ésimo número de Fibonacci.

let fibonacci = 0;
let anterior1 = 0;
let anterior2 = 1;

function fibonacciN(fibonacci, anterior1, anterior2) {
    anterior1 = fibonacci;
    fibonacci = anterior1 + anterior2;
    console.log(fibonacci);
    anterior2 = anterior1;
    return fibonacciN(fibonacci, anterior1, anterior2);
}

console.log(fibonacciN(fibonacci, anterior1, anterior2));