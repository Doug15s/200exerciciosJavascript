// Exercício 16: Escreva um programa que determina o maior entre três números.

let numero1 = parseInt(prompt("Digite o primeiro número: "));
let numero2 = parseInt(prompt("Digite o segundo número: "));
let numero3 = parseInt(prompt("Digite o terceiro número: "));

if (numero1 > numero2) {
    var maior = numero1;
} else {
    maior = numero2;
}

if (maior > numero3) {
    console.log(`O número ${maior} foi o maior número informado.`);
} else {
    console.log(`O número ${numero3} foi o maior número informado.`);
}