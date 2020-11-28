var adicionarItem = function () {

    var item = document.getElementById('item').value;

    if (item.length == 0) {
        alert("Preencha o campo item");
        return;
    }

    var option = document.createElement('option');
    option.innerHTML = item;
    option.value = item;

    document.getElementById('lista').appendChild(option);
    document.getElementById('item').value = "";
}

var salvarLista = function () {

    var itens = new Array();
    var lista = document.getElementById("lista");

    for (i = 0; i < lista.length; i++) {
        itens.push(lista.options[i].value);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    alert("Lista salva com sucesso");
}