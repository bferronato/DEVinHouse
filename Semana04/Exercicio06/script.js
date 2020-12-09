// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que 
// receba uma lista de pessoas e retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos.

// FILTER

const menorDeIdade = function (pessoas) {
    
    return menores = pessoas.filter((pessoa) => {
        return pessoa.idade < 18;
    });
}

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programadora" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

console.log(menorDeIdade(pessoas))