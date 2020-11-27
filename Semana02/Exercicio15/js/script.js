var adicionarItem = function() {

    var item = document.getElementById('item').value;
    
    if(item.length == 0) {
        alert("Preencha o campo item");
        return;
    }
    
    var option = document.createElement('option');
    option.innerHTML = item;
    option.value = item;

    document.getElementById('listaItem').appendChild(option);
}