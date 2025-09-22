// Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Atenção! Você está dentro da sua faixa de baixo peso, com IMC de ${imc}!`);
} else {
    if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Parabéns! Você está dentro da sua faixa de peso normal, com IMC de ${imc}!`);
    } else {
        if (imc >= 25 && imc <= 29.9) {
            console.log(`Atenção! Você está dentro da sua faixa de sobrepeso, com IMC de ${imc}!`);
        } else {
            console.log(`Atenção! Você está dentro da sua faixa de obesidade, com IMC de ${imc}!`);
        }
    }
}