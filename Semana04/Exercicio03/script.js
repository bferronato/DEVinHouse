// Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, 
// crie uma função que receba uma lista de pessoas e descubra se alguma das pessoas da lista 
// é maior de idade (18 anos) retornando o resultado.

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programadora" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

const maiorDeIdade = function (pessoas) {

    let maior = [];
    pessoas.forEach(function (pessoa) {
        if (pessoa.idade >= 18) {
            maior.push(pessoa);
        }
    });
    console.log("As pessoas maiores de idade são: " + maior.map((pessoa) => { return pessoa.nome }).join(', '));
    ;
}

maiorDeIdade(pessoas);