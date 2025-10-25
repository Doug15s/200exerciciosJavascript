// Exercício 84:  Crie um objeto "retangulo" que possui propriedades para altura e largura, e um método para calcular a área.

let retangulo = {
    altura: 0,
    largura: 0,
    area: function(altura, largura) {
        this.altura = altura;
        this.largura = largura;
        return altura * largura;
    }
}

let areaRetangulo1 = retangulo.area(2, 4);

console.log(`A área do retângulo é ${areaRetangulo1}.`);