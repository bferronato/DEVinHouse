function atualizaHora() {
    var agora = new Date(),
        horaAcesso = agora.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit', hour12: false});
        
    document.getElementById("resultado").innerHTML = horaAcesso;
}

atualizaHora();

setInterval(atualizaHora, 60 * 1000);