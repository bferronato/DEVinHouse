(function () {

    let adicionar = document.getElementById("adicionar");
    let todo = document.getElementById("todo");

    window.onload = function () {
        carregarLista();
    };

    window.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) {
            return;
        }
        
        if (event.key == "/") {
            document.getElementById("todo").focus();
        } if (event.key == "Enter") {
            adicionarItem();
        } else if (event.key == "j" && !(document.activeElement === document.getElementById('todo'))) {
            navegar(1);
        } else if (event.key == "k" && !(document.activeElement === document.getElementById('todo'))) {
            navegar(-1);
        } else if (event.key == "Delete" && !(document.activeElement === document.getElementById('todo'))) {
            excluirItemTeclado();
        } else if (event.key == "x" && !(document.activeElement === document.getElementById('todo'))) {
            concluirItemTeclado();
        } else if (event.key == "Escape") {
            document.getElementById("todo").value = "";
            document.getElementById("todo").blur();
        } else {
            return;
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
            itens.push({ "nome": item, "concluido": false, "selecionado": false });

            salvarLista(itens, carregarLista);
            // localStorage.setItem("itens", JSON.stringify(itens));
            // carregarLista();
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

        // itens.sort((a, b) => (a.concluido > b.concluido) ? 1 : ((b.concluido > a.concluido) ? -1 : 0));

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
            if(item.selecionado) {
                li.classList.add("selecionado");
            }
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

    let salvarLista = function(itens, callback) {

        itens.sort((a, b) => (a.concluido > b.concluido) ? 1 : ((b.concluido > a.concluido) ? -1 : 0));
        localStorage.setItem("itens", JSON.stringify(itens));
        
        if(callback) {
            callback();
        }
    }

    let excluirItem = function (item) {

        let itens = JSON.parse(localStorage.getItem("itens"));
        let itemExcluir = itens.findIndex(x => x.nome == item);

        let confirmaExclusao = confirm(`Deseja realmente excluir o item ${item}?`);
        if (confirmaExclusao) {
            itens.splice(itemExcluir, 1);
        }

        salvarLista(itens, carregarLista);
        // localStorage.setItem("itens", JSON.stringify(itens));
        // carregarLista();
    }
    
    let excluirItemTeclado = function () {

        let itens = JSON.parse(localStorage.getItem("itens"));
        let itemExcluir = itens.find(x => x.selecionado == true);

        // localStorage.setItem("itens", JSON.stringify(itens));

        if(itemExcluir) {
            excluirItem(itemExcluir.nome);
        }
    }

    let concluirItem = function (item) {

        let itens = JSON.parse(localStorage.getItem("itens"));
        let itemConcluir = itens.findIndex(x => x.nome == item);

        itens[itemConcluir].concluido = !itens[itemConcluir].concluido;

        salvarLista(itens, carregarLista);
        // localStorage.setItem("itens", JSON.stringify(itens));
        // carregarLista();
    }

    let concluirItemTeclado = function () {

        let itens = JSON.parse(localStorage.getItem("itens"));
        let itemConcluir = itens.find(x => x.selecionado == true);

        // localStorage.setItem("itens", JSON.stringify(itens));

        if(itemConcluir) {
            concluirItem(itemConcluir.nome);
        }
    }

    let navegar = function (direcao) {

        let itens = JSON.parse(localStorage.getItem("itens"));
        let itemSelecionar = itens.findIndex(x => x.selecionado == true);

        itens.forEach(function (item, i) {
            item.selecionado = false;
        });

        if(itemSelecionar <= 0 && direcao < 0) {
            itens[0].selecionado = true;
        } else if (itemSelecionar == (itens.length - 1) && direcao > 0) {
            itens[itens.length - 1].selecionado = true;
        } else {
            itens[itemSelecionar + direcao].selecionado = true;
        }

        let proximoSelecionar = itens.findIndex(x => x.selecionado == true);


        let limpaListaTarefas = document.querySelectorAll(".lista-tarefas ul li");
        limpaListaTarefas.forEach(function(item) {
            item.classList.remove("selecionado");
        });
        

        let listaTarefas = document.querySelector(`.lista-tarefas ul li:nth-child(${proximoSelecionar+1})`);

        listaTarefas.classList.add("selecionado");

        salvarLista(itens);
        // localStorage.setItem("itens", JSON.stringify(itens));
    }

})();
