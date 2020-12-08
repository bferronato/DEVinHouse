// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que receba 
// uma lista de pessoas e retorne a primeira pessoa com idade maior que 18 anos.

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programadora" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

const maiorDeIdade = function (pessoas) {

    let maior = [];
    pessoas.every(function (pessoa) {
        if (pessoa.idade >= 18) {
            maior.push(pessoa);
            return false;
        } else {
            return true;
        }
    });

    console.log("A primeira pessoa maior de idade é: " + maior.map((pessoa) => { return pessoa.nome }).join(', '));
}

maiorDeIdade(pessoas);