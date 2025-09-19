//  Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

let numero = parseInt(prompt("Digite um número qualquer: "));

if (numero < 0) {
    console.log(`O número ${numero} é um número negativo!`);
} else {
    if (numero == 0) {
        console.log(`O número informado foi o zero!`);
    } else {
        console.log(`O número ${numero} é um número positivo!`);
    }
}