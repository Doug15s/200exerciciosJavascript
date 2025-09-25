// Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.

let numero = parseInt(prompt("Digite um número qualquer: "));
let intervaloInicio = parseInt(prompt("Vamos determinar um intervalo. Digite um número qualquer para estabelecer o início do intervalo: "));
let intervaloFim = parseInt(prompt("Agora digite um número qualquer para estabelecer o término do intervalo: "));

if (numero >= intervaloInicio && numero <= intervaloFim) {
    console.log(`O número informado foi o ${numero} e está dentro do intervalo estabelecido, entre ${intervaloInicio} e ${intervaloFim}.`);
} else {
    console.log(`O número informado foi o ${numero} e não está dentro do intervalo estabelecido, que foi do ${intervaloInicio} até o ${intervaloFim}.`)
}