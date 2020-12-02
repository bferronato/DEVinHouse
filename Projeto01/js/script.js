(function () {

    let adicionar = document.getElementById("adicionar");
    let todo = document.getElementById("todo");

    window.onload = function () {
        carregarLista();
    };

    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return;
        }

        if (event.key == "/") {
            document.getElementById("todo").focus();
        } else if (event.key == "Escape") {
            document.getElementById("todo").blur();
        } else {
            return;
        }

        event.preventDefault();
    }, true);

    todo.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) {
            return;
        }

        if (event.key == "Enter") {
            adicionarItem();
        }

        event.preventDefault();
    }, true);

    adicionar.addEventListener("click", function () {
        adicionarItem();
    });

    let adicionarItem = function () {
        let itens = new Array();
        let item = document.getElementById("todo").value;

        if (localStorage.hasOwnProperty("itens")) {
            itens = JSON.parse(localStorage.getItem("itens"));
        }

        if (validarAdicionarItem(itens, item)) {

            document.getElementById("todo").value = "";
            itens.push({ "nome": item, "concluido": false });

            localStorage.setItem("itens", JSON.stringify(itens));

            carregarLista();
        }
    }

    let validarAdicionarItem = function (itens, item) {

        if (item.length === 0) {
            alert("O nome do item não pode ser vazio.");
            return false;
        }

        if (itens.some(e => e.nome.toLowerCase() === item.toLowerCase())) {
            alert("O item já está cadastrado na sua lista.");
            return false;
        }

        return true;
    }

    let carregarLista = function () {
        let itens = new Array();

        if (localStorage.hasOwnProperty("itens")) {
            itens = JSON.parse(localStorage.getItem("itens"));
        }

        montarLista(itens);
    }

    let montarLista = function (itens) {
        let listaTarefas = document.querySelector(".lista-tarefas");
        listaTarefas.innerHTML = "";
        let ul = document.createElement("ul");

        itens.forEach(function (item, i) {

            let id = "item-" + i;
            let nome = item.nome;

            let checkbox = document.createElement("input");
            checkbox.id = id;
            checkbox.type = "checkbox";
            checkbox.checked = item.concluido;
            checkbox.addEventListener("click", function () {
                concluirItem(nome);
            });

            let label = document.createElement("label");
            label.innerHTML = nome;
            label.setAttribute("for", id);

            let divItem = document.createElement("div");
            divItem.appendChild(checkbox);
            divItem.appendChild(label);

            let iconeExcluir = document.createElement("i");
            iconeExcluir.classList.add("fas", "fa-trash-alt", "excluirItem");
            iconeExcluir.addEventListener("click", function () {
                excluirItem(nome);
            });

            let divIcone = document.createElement("div");
            divIcone.appendChild(iconeExcluir);

            let li = document.createElement("li");
            li.appendChild(divItem);
            li.appendChild(divIcone);

            ul.appendChild(li);
        });

        if (itens.length > 0) {
            listaTarefas.appendChild(ul);
        } else {
            let listaVazia = document.createElement("h4");
            listaVazia.innerHTML = "Nenhum item adicionado a sua lista.";
            listaTarefas.appendChild(listaVazia);
        }
    }

    let excluirItem = function(item) {

        let itens = JSON.parse(localStorage.getItem("itens"));
        let itemExcluir = itens.findIndex(x => x.nome == item);

        let confirmaExclusao = confirm(`Deseja realmente excluir o item ${item}?`);
        if(confirmaExclusao) {
            itens.splice(itemExcluir, 1);
        }

        localStorage.setItem("itens", JSON.stringify(itens));
        carregarLista();
    }
    
    let concluirItem = function(item) {

        let itens = JSON.parse(localStorage.getItem("itens"));
        let itemConcluir = itens.findIndex(x => x.nome == item);

        itens[itemConcluir].concluido = !itens[itemConcluir].concluido;

        localStorage.setItem("itens", JSON.stringify(itens));
        carregarLista();
    }
    
})();