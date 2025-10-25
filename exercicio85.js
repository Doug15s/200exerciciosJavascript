// Exercício 85: Crie um objeto "quadrado" que herda as propriedades do objeto "retangulo" e substitua o método para calcular a área.

let retangulo = {
    altura: 0,
    largura: 0,
    area: function(altura, largura) {
        this.altura = altura;
        this.largura = largura;
        return altura * largura;
    }
}

let quadrado = new retangulo();