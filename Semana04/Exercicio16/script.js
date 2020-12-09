// Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie uma função que 
// receba um objeto cidade e atribua nome e o estado a duas variáveis e imprima elas no console.

// DESTRUCTING

function imprimeCidade(cidade) {
    const { nome, estado } = cidade;
    console.log(`Cidade ${nome}, estado ${estado}`);
}

const cidade = { "nome": "Florianópolis", "estado": "SC" };

imprimeCidade(cidade);