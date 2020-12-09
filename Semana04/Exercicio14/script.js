// Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie uma função 
// que recebe uma lista de cidades e retorna uma lista com os nomes das cidades concatenados com o seu estado.

// MAP

const listaCidades = (cidades) => {

    return cidades.map((cidade) => {
        return `${cidade.nome}, ${cidade.estado}`
    }).join(" - ");

}

const cidades = [
    { "nome": "Florianópolis", "estado": "SC" },
    { "nome": "Jaragua", "estado": "SC" },
    { "nome": "Porto Alegre", "estado": "RS" },
    { "nome": "Cascavel", "estado": "PR" },
    { "nome": "Xanxere", "estado": "SC" }
];

console.log(listaCidades(cidades))