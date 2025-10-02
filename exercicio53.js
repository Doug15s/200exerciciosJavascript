// Exercício 53: Escreva uma função que verifique se um número é primo.

let numero = parseInt(prompt("Digite um número qualquer para verificar se o mesmo é um número primo: "));

function primo(numero) {
    if ((numero % 2 != 0) && (numero % 3 != 0) && (numero % 5 != 0) && (numero % 7 != 0) || (numero == 2) || (numero == 3) || (numero == 5) || (numero == 7)) {
        return `O número ${numero} é um número primo!`;
    } else {
        return `O número ${numero} não é um número primo!`;
    }
}

let resultado = primo(numero);

console.log(resultado);