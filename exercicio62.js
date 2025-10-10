// Exercício 62: Escreva uma função que receba um número e retorne uma string repetida aquele número de vezes.

function repetir(numero) {
    let palavra = "azul";
    let somapalavra = "";
    for (let i = 1; i <= numero; i++) {
        somapalavra = somapalavra + palavra;
        //console.log(somapalavra);
    }

    return somapalavra;
}

let numero = parseInt(prompt("Digite um número qualquer: "));

console.log(`A palavra 'azul' repetida ${numero} vezes ficou assim: ${repetir(numero)}.`);