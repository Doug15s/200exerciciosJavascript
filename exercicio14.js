// Exercício 14: Escreva um programa que verifica se um ano é bissexto.

let ano = parseInt(prompt("Digite o ano que deseja saber se é ano bissexto: "));

if (ano % 4 == 0 && ano % 100 != 0) {
    console.log(`O ano de ${ano} é um ano bissexto!`);
}else {
    if (ano % 100 == 0 && ano % 400 == 0) {
        console.log(`O ano de ${ano} é um ano bissexto!`);
    } else {
        console.log(`O ano de ${ano} não é um ano bissexto!`);
    }
}