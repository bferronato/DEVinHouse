// Novamente considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie uma função 
// que receba uma lista de cidades e verifique se alguma das cidades é do estado “RS”, retornando o resultado.

// SOME

function ehRioGraneDoSul(cidade, index, arr) {
    return cidade.estado === 'RS';
}

const cidades = [
    { "nome": "Florianópolis", "estado": "SC" },
    { "nome": "Jaragua", "estado": "SC" },
    { "nome": "Porto Alegre", "estado": "RS" },
    { "nome": "Cascavel", "estado": "PR" },
    { "nome": "Xanxere", "estado": "SC" }
];

let rioGrandeDoSul = cidades.some(ehRioGraneDoSul);

if(rioGrandeDoSul) {
    console.log("Ao menos uma cidade é do Rio Grande do Sul")
} else {
    console.log("Nenhuma cidade é do Rio Grande do Sul")
}
