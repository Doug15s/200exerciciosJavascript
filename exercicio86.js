// Exercício 86:  Crie um objeto "livro" que possui propriedades para o título, autor e número de páginas, e um método para exibir o livro na console.

let livro = {
    titulo: "O Homem Eterno",
    autor: "G. K. Chesterton",
    paginas: 332,
    apresentar(){
        console.log(`O título do livro é '${this.titulo}', do autor '${this.autor}', com ${this.paginas} páginas.`);
    }
}

livro.apresentar();