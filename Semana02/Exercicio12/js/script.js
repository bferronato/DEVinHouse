var agora = new Date();
var horaAcesso = agora.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit', hour12: false});

document.getElementById("resultado").innerHTML = horaAcesso;