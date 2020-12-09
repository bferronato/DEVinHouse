// Crie uma arrowFunction que receba um objeto contendo altura e largura de um retângulo e retorne a área do retângulo.

//ARROW FUNCTION

const areaRetangulo = (retangulo) => {
    const { altura, largura } = retangulo;
    return altura * largura;
}

let area = areaRetangulo({ "altura": 5, "largura": 10 });

console.log(`A área do retangula é: ${area}`);