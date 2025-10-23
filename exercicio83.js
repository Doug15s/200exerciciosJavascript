// Exercício 83: Crie um objeto "tempo" que possui propriedades para horas, minutos e segundos, e um método para converter o tempo para segundos.

let tempo = {
    horas: 0,
    minutos: 0,
    segundos: 0,
    calcularSegundos: function(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
        return (horas * 60 * 60) + (minutos * 60) + segundos;
    }
}

let segundos = tempo.calcularSegundos(2, 30, 45);

console.log(`O valor em segundos do horário 2:30:45 é: ${segundos} segundos.`);