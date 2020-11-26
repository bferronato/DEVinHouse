var agora = new Date();
var horaAcesso = agora.getHours() + ":" + agora.getMinutes();

document.getElementById("resultado").innerHTML = horaAcesso;