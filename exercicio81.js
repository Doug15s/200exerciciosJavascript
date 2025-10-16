// Exercício 81: Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo e métodos para depósito e saque.

let conta = {
    saldo: 0.0,
    depositar: function(valor) {
        if (valor > 0.0) {
            this.saldo += valor;
            console.log(`Foi adicionado R$ ${valor} ao saldo!`);
        }
    },
    sacar: function(valor) {
        if (this.saldo > 0.0 && this.saldo >= valor) {
            this.saldo -= valor;
            console.log("Saque efetuado com sucesso!");
        } else {
            console.log("Saldo insuficiente!");
        }
    }
};

console.log(conta.saldo);

conta.depositar(100.0);
conta.sacar(50.0);
conta.sacar(51.0);