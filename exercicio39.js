// Exercício 39: Usando um laço for, crie um programa que calcule o fatorial de um número.

let numero = parseInt(prompt("Digite um número qualquer para calcular o seu fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}.`);