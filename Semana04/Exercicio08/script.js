// Crie uma função que receba uma lista de valores numéricos, e utilizando a função reduce imprima a multiplicação dos valores da lista.

var numeros = [2, 3, 4, 5, 6];

var produto = numeros.reduce((total, numero) => {
    return total * numero;
}, 1);

console.log(`A multiplicação da lista é: ${produto}`);