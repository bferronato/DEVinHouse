// Crie uma função que receba como parâmetro uma lista de notas e calcule a média dessas notas imprimindo o resultado.

// FOREACH

const calculaMedia = function (notas) {
    let media;
    let soma = 0;
    notas.forEach(function (nota) {
        soma += nota;
    });
    media = soma / notas.length;
    console.log(`A média das notas é: ${media}`);
}

calculaMedia([6,7,8,9,9]);