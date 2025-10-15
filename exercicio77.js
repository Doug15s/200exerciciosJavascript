// Exercício 77: Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas. Em seguida, 
// adicione um método ao objeto que imprima uma descrição do livro.

let livro = {
    titulo: "O Homem Eterno",
    autor: "G. K. Chesterton",
    paginas: 336,
    descricao: function() {
        console.log(`Título: ${this.titulo}, autor: ${this.autor}, número de páginas: ${this.paginas}.`);
    }
}

livro.descricao();