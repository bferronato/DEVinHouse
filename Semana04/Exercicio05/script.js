// Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que 
// receba uma lista de pessoas e retorne uma lista com os nomes das pessoas.

// MAP

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programador" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

const listaNomes = function (pessoas) {
    return pessoas.map((pessoa) => {
        return pessoa.nome;
    });
}

const nomes = listaNomes(pessoas);

console.log("Os nomes das pessoas são: " + nomes.join(', '));