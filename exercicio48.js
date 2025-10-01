// Exercício 48: Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.

function parOuimpar(numero) {
    let resultado;
    if (numero % 2 == 0) {
        resultado = "O número é par!";
    } else {
        resultado = "O número é ímpar!";
    }
    return resultado;
}

console.log(parOuimpar(10));