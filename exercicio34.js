// Exercício 34: Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz).

let i = 1;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FizzBuzz!!! O número ${i} é múltiplo de 3 e de 5!`);
    } else {
        if (i % 3 == 0) {
            console.log(`Fizz!!! O número ${i} é múltiplo de 3!`);
        } else {
            if (i % 5 == 0) {
                console.log(`Buzz!!!!! O número ${i} é múltiplo de 5!`);
            } else {
                console.log(i);
            }
        }
    }
    i++;
}