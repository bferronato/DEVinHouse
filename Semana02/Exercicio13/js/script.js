function atualizaHora() {
    var agora = new Date(),
        horaAcesso = agora.toLocaleTimeString([], {timeStyle: 'short'});
        
    document.getElementById("resultado").innerHTML = horaAcesso;
}

atualizaHora();

setInterval(atualizaHora, 60 * 1000);