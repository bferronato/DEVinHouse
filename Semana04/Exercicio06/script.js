// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que 
// receba uma lista de pessoas e retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos.

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programadora" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

const menorDeIdade = function (pessoas) {

    let maior = [];
    pessoas.forEach(function (pessoa) {
        if (pessoa.idade < 18) {
            maior.push(pessoa);
        }
    });
    console.log("As pessoas menores de idade são: " + maior.map((pessoa) => { return pessoa.nome }).join(', '));
    ;
}

menorDeIdade(pessoas);