// Usando um laço do-while, crie um programa que transforme um número decimal em binário.

let numeroDecimal = parseInt(prompt("Digite um número qualquer decimal para saber o seu respectivo em binário: "));

let numeroBinario = [];
let binario = 0;

let i = 0;

do {
	binario = parseInt(numeroDecimal % 2);
    numeroBinario.push(binario);
	i++;
	numeroDecimal = parseInt(numeroDecimal / 2);
} while (numeroDecimal != 0);

console.log("O número em binário é: ");
for (let j = i; j >= 0; j--) {
  console.log(numeroBinario [j]);
}