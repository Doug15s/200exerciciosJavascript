// Exercício 49: Escreva uma função que aceite três números como argumentos e retorne o maior deles.

function maiorValor(numero1, numero2, numero3) {
    let maior;
    let resultado;

    if (numero1 > numero2) {
        maior = numero1;
    } else {
        maior = numero2;
    }

    if (maior > numero3) {
        resultado = `O número ${maior} foi o maior número informado.`;
    } else {
        resultado = `O número ${numero3} foi o maior número informado.`;
    }

    return resultado;

}

console.log(maiorValor(10, 20, 30));