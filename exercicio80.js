// Exercício 80: Crie um objeto que represente um estudante, com propriedades para o nome, notas de várias matérias e um método para
//  calcular a média das notas.

let estudante = {
    nome: "João",
    materia: {
        nome: "POO",
        nota1: 9.5,
        nota2: 9.0,
        nota3: 9.7,
        nota4: 9.9
    },
    media: function(nota1, nota2, nota3, nota4) {
        return (nota1 + nota2 + nota3 + nota4) / 4;
    }
};