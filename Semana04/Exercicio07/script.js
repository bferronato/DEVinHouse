// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que receba 
// uma lista de pessoas e retorne a primeira pessoa com idade maior que 18 anos.

// FIND

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programadora" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

const maiorDeIdade = function (pessoas) {

    return pessoas.find(function (pessoa) {
        return pessoa.idade >= 18;
    });

}

console.log(maiorDeIdade(pessoas));