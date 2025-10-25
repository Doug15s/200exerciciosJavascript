// Exercício 86:  Crie um objeto "livro" que possui propriedades para o título, autor e número de páginas, e um método para exibir o livro na console.

let livro = {
    titulo: " ",
    autor: " ",
    paginas: 0,

    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    },

    apresentar(titulo, autor, paginas) {
        console.log(`O título do livre é '${titulo}', do autor '${autor}', com ${paginas} páginas.`)
    }
}

let livro1 = ("O Homem Eterno", "G. K. Chesterton", 332);
livro1.apresentar(livro1.titulo, livro1.autor, livro1.paginas);