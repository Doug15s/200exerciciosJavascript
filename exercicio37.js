// Exercício 37: Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais.

function soma(n) {
    let somaQuadrados = 0;
    let i = 1;
    while (i <= n) {
        somaQuadrados += i * i;
        i++;
    }
    return somaQuadrados;
}

console.log(`A soma dos quadrados dos primeiros 10 números naturais é: ${soma(10)}.`);