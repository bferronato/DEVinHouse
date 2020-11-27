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

    if (mes >= 12 || mes < 3) {
        estacao = estacoes['verao'];
    }

    if (mes >= 3 && mes < 6) {
        estacao = estacoes['outono'];
    }

    if (mes >= 6 && mes < 9) {
        estacao = estacoes['inverno'];
    }
    
    if (mes >= 9 && mes < 12) {
        estacao = estacoes['primavera'];
    } 
    
    atualizarEstacao(estacao);
}

obterEstacao();