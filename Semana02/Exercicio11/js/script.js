var verificarNumero = function() {
    var numero = document.getElementById("numero").value,
        resultado = (numero % 2 == 0) ? "O número é par." : "O número é ímpar.";

    document.getElementById("resultado").innerHTML = resultado;
}