// Considerando uma entidade Cidade, contendo os seguintes atributos nome e estado, 
// crie uma função que receba uma lista de cidades e retorne a lista de cidades em que o estado seja “SC”.

// FILTER

const filtroCidade = (cidades) => {
    
    return cidadesSC = cidades.filter((cidade) => {
        return cidade.estado === 'SC';
    });
}

const cidades = [
    { "nome": "Florianópolis", "estado": "SC" },
    { "nome": "Jaragua", "estado": "SC" },
    { "nome": "Porto Alegre", "estado": "RS" },
    { "nome": "Cascavel", "estado": "PR" },
    { "nome": "Xanxere", "estado": "SC" }
];

console.log(filtroCidade(cidades))