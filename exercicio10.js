// Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

let nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));

let mediaAluno = (nota1 + nota2) / 2;

if (mediaAluno >= 7.0) {
    console.log(`A média do aluno foi ${mediaAluno}, portanto o aluno foi aprovado!`);
} else {
    console.log(`A média do aluno foi ${mediaAluno}, portanto o aluno foi reprovado!`);
}