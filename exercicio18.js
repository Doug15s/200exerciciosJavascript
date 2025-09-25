// Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

let idade = parseInt(prompt("Informe quantos anos você tem: "));

if (idade >= 18) {
    console.log(`Você tem ${idade} anos de idade e por isso já possui idade suficiente para dirigir.`);
} else {
    console.log(`Você tem ${idade} anos de idade e ainda não possui idade suficiente para ter permissão para dirigir.`);
}