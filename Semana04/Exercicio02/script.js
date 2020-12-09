// Crie uma função que receba um uma lista de números e imprima o quadrado de cada número.

// MAP

const calculaQuadrado = function (numeros) {

    return numeros.map((numero) => {
        return numero ** 2;
    });

}

let quadrados = calculaQuadrado([1, 2, 3, 4, 5, 6]);

console.log("Os quadrados são: " + quadrados.join(", "));