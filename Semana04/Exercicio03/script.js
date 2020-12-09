// Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, 
// crie uma função que receba uma lista de pessoas e descubra se alguma das pessoas da lista 
// é maior de idade (18 anos) retornando o resultado.

// SOME

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programadora" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

const maiorDeIdade = function (pessoa) {

    return pessoa.idade >= 18;

}

let maior = pessoas.some(maiorDeIdade);

if (maior) {
    console.log("Existe ao menos uma pessoa maior de idade");
} else {
    console.log("Não existe nenhuma pessoa maior de idade");
}