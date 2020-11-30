var estacoes = {
    "outono": {
        "nome": "Outono",
        "img": "./img/outono.png"
    },
    "inverno": {
        "nome": "Inverno",
        "img": "./img/inverno.png"
    },
    "primavera": {
        "nome": "Primavera",
        "img": "./img/primavera.png"
    },
    "verao": {
        "nome": "Verão",
        "img": "./img/verao.png"
    },
};

function atualizarEstacao(estacao) {
    var estacaoNome = document.getElementsByClassName("estacaoNome")[0].innerHTML = estacao.nome;
    var estacaoImg = document.getElementsByClassName("estacaoImg")[0].src = estacao.img;
    var estacaoImgAlt = document.getElementsByClassName("estacaoImg")[0].alt = estacao.nome;
}

function obterEstacao() {
    var hoje = new Date();
    var mes = hoje.getMonth() + 1;
    var estacao;

    switch (mes) {
        case 1:
        case 2:
        case 12:
            estacao = estacoes['verao'];
            break;
        case 3:
        case 4:
        case 5:
            estacao = estacoes['outono'];
            break;
        case 6:
        case 7:
        case 8:
            estacao = estacoes['inverno'];
            break;
        case 9:
        case 10:
        case 11:
            estacao = estacoes['primavera'];
            break;
    }

    atualizarEstacao(estacao);
}

obterEstacao();