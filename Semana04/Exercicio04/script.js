// Considerando a mesma entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO 
// crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista 
// possuem a profissão “Programador” retornando o resultado.

var pessoas = [{ "nome": "Joao", "idade": "17", "telefone": "984088822", "profissao": "Analista de Sistemas" }, { "nome": "Maria", "idade": "25", "telefone": "982288822", "profissao": "Programador" }, { "nome": "Amanda", "idade": "32", "telefone": "982281112", "profissao": "Developer" }];

const programador = function (pessoas) {

    let programadores = pessoas.filter((pessoa) => {
        return pessoa.profissao === 'Programador';
    });

    console.log("Os programadores são: " + programadores.map((pessoa) => { return pessoa.nome }).join(', '));
}

programador(pessoas);