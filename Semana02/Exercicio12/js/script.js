var agora = new Date();
var horaAcesso = agora.toLocaleTimeString([], {timeStyle: 'short'});

document.getElementById("resultado").innerHTML = horaAcesso;