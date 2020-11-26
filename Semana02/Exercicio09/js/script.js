var adicionar = function() {
    var valor1 = document.getElementById("valor1").value,
        valor2 = document.getElementById("valor2").value,
        resultado = Number(valor1) + Number(valor2);
    
    setResultado(resultado);
}

var subtrair = function() {
    var valor1 = document.getElementById("valor1").value,
        valor2 = document.getElementById("valor2").value,
        resultado = Number(valor1) - Number(valor2);
    
    setResultado(resultado);
}

var multiplicar = function() {
    var valor1 = document.getElementById("valor1").value,
        valor2 = document.getElementById("valor2").value,
        resultado = Number(valor1) * Number(valor2);
    
    setResultado(resultado);
}

var dividir = function() {
    var valor1 = document.getElementById("valor1").value,
        valor2 = document.getElementById("valor2").value,
        resultado;
    
    if (Number(valor2) === 0) {
        setResultado("Erro divisão por zero.");
    } else {
        resultado = Number(valor1) / Number(valor2);
        setResultado(resultado);
    }
}

var setResultado = function(resultado) {
    document.getElementById("resultado").value = resultado;
}