// Crie uma função que receba um uma lista de números e imprima o quadrado de cada número.

const calculaQuadrado = function (numeros) {

    let quadrados = [];
    let quadrado;
    numeros.forEach(function (numero) {
        quadrado = numero ** 2;
        quadrados.push(quadrado);
    });
    console.log("Os quadrados são: " + quadrados.join(", "));
}

calculaQuadrado([1, 2, 3, 4, 5, 6]);