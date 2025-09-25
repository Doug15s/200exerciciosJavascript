// Exercício 17: Escreva um programa que determina se um número é par ou ímpar.

let numero = parseInt(prompt("Digite um número inteiro qualquer: "));

if (numero % 2 == 0) {
    console.log(`O número ${numero} é par!`);
} else {
    console.log(`O número ${numero} é ímpar!`);
}