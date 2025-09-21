// Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.

let idade = parseInt(prompt("Digite a sua idade: "));
if (idade >= 16) {
    console.log(`Parabéns! Você já tem ${idade} anos e por isso pode votar!`);
} else {
    console.log(`Você tem ${idade} anos e ainda não pode votar.`);
}