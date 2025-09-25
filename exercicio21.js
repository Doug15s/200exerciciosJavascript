// Exercício 21: Escreva um programa que determina a estação do ano com base no mês.

let mes = prompt("Informe o número do mês para saber a estação, sendo 1 para janeiro e 12 para dezembro: ");

if (mes == 12 || mes == 1 || mes == 2) {
    console.log(`O mês informado foi o ${mes} e a estação do ano é o verão.`);
} else {
    if (mes == 3 || mes == 4 || mes == 5) {
        console.log(`O mês informado foi o ${mes} e a estação do ano é o outono.`);
    } else {
        if (mes == 6 || mes == 7 || mes == 8) {
            console.log(`O mês informado foi o ${mes} e a estação do ano é o inverno.`);
        } else {
            console.log(`O mês informado foi o ${mes} e a estação do ano é a primavera.`);
        }
    }
}