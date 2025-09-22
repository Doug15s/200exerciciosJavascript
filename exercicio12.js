// Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

let nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));
let nota4 = parseFloat(prompt("Digite a quarta nota do aluno: "));

mediaFinal = (nota1+nota2+nota3+nota4) / 4;

if (mediaFinal >= 7.0) {
    console.log(`Parabéns! Aluno aprovado com média final ${mediaFinal}!`);
} else {
    if (mediaFinal >= 6.0 && mediaFinal < 7.0) {
        console.log(`Atenção! Aluno em recuperação com média final ${mediaFinal}!`);
    } else {
        console.log(`Atenção! Aluno reprovado com média final ${mediaFinal}!`);
    }
}