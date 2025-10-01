// Exercício 38: Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais.

function soma(n) {
    let somaCubos = 0;
    let i = 1;
    do {
        somaCubos += i * i * i;
        i++;
    } while (i <= n);
    return somaCubos;
}

console.log(`A soma dos cubos dos primeiros 10 números naturais é: ${soma(10)}.`);