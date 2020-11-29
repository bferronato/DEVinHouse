(function () {

    const quantidade = 10;

    var calcularPAButton = document.getElementById('calcularPAButton');
    var calcularPGButton = document.getElementById('calcularPGButton');

    calcularPAButton.addEventListener('click', function () {
        calcularProgressao('PA');
    });
    
    calcularPGButton.addEventListener('click', function () {
        calcularProgressao('PG');
    });

    var calcularProgressao = function (tipoProgressao) {

        var valorInicial = document.getElementById('valorInicial').value,
            raiz = document.getElementById('raiz').value,
            resultado = [];

        if (!validarFormulario(valorInicial, raiz)) {
            alert("Preencha todos os campos do formulário.");
            return;
        }

        if(tipoProgressao == 'PA') {
            for (var i = 0; i < quantidade; i++) {
                resultado.push(valorInicial);
                valorInicial = Number(valorInicial) + Number(raiz);
            }
        }

        if(tipoProgressao == 'PG') {
            for (var i = 0; i < quantidade; i++) {
                resultado.push(valorInicial);
                valorInicial = Number(valorInicial) * Number(raiz);
            }
        }

        document.getElementById('resultado').innerHTML = resultado.join(', ');
    }

    var validarFormulario = function (valorInicial, raiz) {

        if (valorInicial.length > 0 && raiz.length > 0) {
            return true;
        }

        return false;
    }

})();