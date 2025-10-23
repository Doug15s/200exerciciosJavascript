// Exercício 82: Crie um objeto "circulo" que possui uma propriedade de raio e dois métodos que calculam a área e a circunferência.

let circulo = {
    raio: 0.0,
    area: function(raio) {
        this.raio = raio;
        return Math.PI * (raio ** 2);
    },
    circunferencia: function(raio) {
        this.raio = raio;
        return 2 * Math.PI * raio;
    }
};

let area = circulo.area(2.0);
let circunferencia = circulo.circunferencia(2.0);

console.log(`A área de um círculo de raio 2 é ${area} e a circunferência é ${circunferencia}.`);