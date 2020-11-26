function atualizaHora() {
    var agora = new Date(),
        horaAcesso = agora.getHours() + ":" + agora.getMinutes();
        
    document.getElementById("resultado").innerHTML = horaAcesso;
}

atualizaHora();

setInterval(atualizaHora, 60 * 1000);