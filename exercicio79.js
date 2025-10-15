// Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual, e os seguintes
//  métodos: acelerar, frear e obter velocidade atual.

let carro = {
    marca: "Chevrolet",
    modelo: "Monza",
    ano: 1994,
    acelerar: function(acelerador) {
        if (acelerador == true) {
            console.log("O veículo está aumentando a velocidade!");
        } else {
            console.log("O veículo está diminuindo a velocidade!");
        }
    },
    frear: function(acelerador, freio) {
        if (acelerador == false && freio == true) {
            console.log("O veículo está freando!");
        } else {
            console.log("O veículo não está freando, portanto não está diminuindo a velocidade!");
        }
    },
    obterVelocidadeAtual: function(velocimetro) {
        if (velocimetro != 0) {
            console.log(`${velocimetro} Km/h.`);
        } else {
            console.log("Veículo parado!");
        }
    }
}

carro.acelerar(true);
carro.acelerar(false);
carro.frear(false, true);
carro.frear(true, false);
carro.obterVelocidadeAtual(50);
carro.obterVelocidadeAtual(0);