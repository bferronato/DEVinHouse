(function () {

    let adicionar = document.getElementById("adicionar");

    window.onload = function () {
        carregarLista();
    };

    window.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) {
            return;
        }

        if (event.key == "/") {
            document.getElementById("tarefa").focus();
        } if (event.key == "Enter" && (document.activeElement === document.getElementById('tarefa'))) {
            adicionarTarefa();
        } else if (event.key == "j" && !(document.activeElement === document.getElementById('tarefa'))) {
            navegar(1);
        } else if (event.key == "k" && !(document.activeElement === document.getElementById('tarefa'))) {
            navegar(-1);
        } else if (event.key == "h" && !(document.activeElement === document.getElementById('tarefa'))) {
            mover(1);
        } else if (event.key == "l" && !(document.activeElement === document.getElementById('tarefa'))) {
            mover(-1);
        } else if (event.key == "Delete" && !(document.activeElement === document.getElementById('tarefa'))) {
            excluirTarefaAtalho();
        } else if (event.key == "x" && !(document.activeElement === document.getElementById('tarefa'))) {
            concluirTarefaAtalho();
        } else if (event.key == "Escape") {
            document.getElementById("tarefa").value = "";
            document.getElementById("tarefa").blur();
        } else {
            return;
        }

        event.preventDefault();
    }, true);

    adicionar.addEventListener("click", function () {
        adicionarTarefa();
    });

    let adicionarTarefa = function () {
        let tarefas = new Array();
        let tarefa = document.getElementById("tarefa").value.trim();

        if (localStorage.hasOwnProperty("tarefas")) {
            tarefas = JSON.parse(localStorage.getItem("tarefas"));
        }

        if (validarAdicionarTarefa(tarefas, tarefa)) {

            document.getElementById("tarefa").value = "";
            tarefas.push({ "nome": tarefa, "concluido": false, "selecionado": false });

            salvarLista(tarefas, carregarLista);
        }
    }

    let validarAdicionarTarefa = function (tarefas, tarefa) {

        if (tarefa.length === 0) {
            alert("O nome da tarefa não pode ser vazio.");
            return false;
        }

        if (tarefas.some(e => e.nome.toLowerCase() === tarefa.toLowerCase())) {
            alert("A tarefa já está cadastrada na sua lista.");
            return false;
        }

        return true;
    }

    let carregarLista = function () {
        let tarefas = new Array();

        if (localStorage.hasOwnProperty("tarefas")) {
            tarefas = JSON.parse(localStorage.getItem("tarefas"));
        }

        montarLista(tarefas);
    }

    let montarLista = function (tarefas) {
        let listaTarefas = document.querySelector(".lista-tarefas");
        listaTarefas.innerHTML = "";
        let ul = document.createElement("ul");

        tarefas.forEach(function (tarefa, i) {

            let id = "tarefa-" + i;
            let nome = tarefa.nome;

            let checkbox = document.createElement("input");
            checkbox.id = id;
            checkbox.type = "checkbox";
            checkbox.checked = tarefa.concluido;
            checkbox.addEventListener("click", function () {
                concluirTarefa(nome);
            });

            let label = document.createElement("label");
            label.innerHTML = nome;
            label.setAttribute("for", id);

            let divTarefa = document.createElement("div");
            divTarefa.appendChild(checkbox);
            divTarefa.appendChild(label);

            let iconeExcluir = document.createElement("i");
            iconeExcluir.classList.add("fas", "fa-trash-alt");
            iconeExcluir.addEventListener("click", function () {
                excluirTarefa(nome);
            });

            let divIcone = document.createElement("div");
            divIcone.appendChild(iconeExcluir);

            let li = document.createElement("li");
            if (tarefa.selecionado) {
                li.classList.add("selecionado");
            }
            li.appendChild(divTarefa);
            li.appendChild(divIcone);

            ul.appendChild(li);
        });

        if (tarefas.length > 0) {
            listaTarefas.appendChild(ul);
        } else {
            let listaVazia = document.createElement("h4");
            listaVazia.innerHTML = "Nenhuma tarefa adicionada a sua lista.";
            listaTarefas.appendChild(listaVazia);
        }
    }

    let salvarLista = function (tarefas, callback) {

        localStorage.setItem("tarefas", JSON.stringify(tarefas));

        if (callback) {
            callback();
        }
    }

    let excluirTarefa = function (tarefa) {

        let tarefas = JSON.parse(localStorage.getItem("tarefas"));
        let tarefaExcluir = tarefas.findIndex(x => x.nome == tarefa);

        let confirmaExclusao = confirm(`Deseja realmente excluir a tarefa "${tarefa}"?`);
        if (confirmaExclusao) {
            tarefas.splice(tarefaExcluir, 1);
        }

        salvarLista(tarefas, carregarLista);
    }

    let excluirTarefaAtalho = function () {

        let tarefas = JSON.parse(localStorage.getItem("tarefas"));
        let tarefaExcluir = tarefas.find(x => x.selecionado == true);

        if (tarefaExcluir) {
            excluirTarefa(tarefaExcluir.nome);
        }
    }

    let concluirTarefa = function (tarefa) {

        let tarefas = JSON.parse(localStorage.getItem("tarefas"));
        let tarefaConcluir = tarefas.findIndex(x => x.nome == tarefa);

        tarefas[tarefaConcluir].concluido = !tarefas[tarefaConcluir].concluido;

        salvarLista(tarefas, carregarLista);
    }

    let concluirTarefaAtalho = function () {

        let tarefas = JSON.parse(localStorage.getItem("tarefas"));
        let tarefaConcluir = tarefas.find(x => x.selecionado == true);

        if (tarefaConcluir) {
            concluirTarefa(tarefaConcluir.nome);
        }
    }

    let navegar = function (direcao) {

        let tarefas = JSON.parse(localStorage.getItem("tarefas"));
        let tarefaSelecionar = tarefas.findIndex(x => x.selecionado == true);

        tarefas.forEach(function (tarefa, i) {
            tarefa.selecionado = false;
        });

        if (tarefaSelecionar <= 0 && direcao < 0) {
            tarefas[0].selecionado = true;
        } else if (tarefaSelecionar == (tarefas.length - 1) && direcao > 0) {
            tarefas[tarefas.length - 1].selecionado = true;
        } else {
            tarefas[tarefaSelecionar + direcao].selecionado = true;
        }

        salvarLista(tarefas, carregarLista);
    }

    let mover = function (direcao) {

        let tarefas = JSON.parse(localStorage.getItem("tarefas"));
        let tarefaSelecionar = tarefas.findIndex(x => x.selecionado == true);

        if (tarefaSelecionar < 0) {
            return;
        }

        tarefas.forEach(function (tarefa, i) {
            tarefa.selecionado = false;
        });

        if (tarefaSelecionar <= 0 && direcao < 0) {
            tarefas[0].selecionado = true;
        } else if (tarefaSelecionar == (tarefas.length - 1) && direcao > 0) {
            tarefas[tarefas.length - 1].selecionado = true;
        } else {
            let tarefaSelecionada = tarefas[tarefaSelecionar];
            let tarefaMover = tarefas[tarefaSelecionar + direcao];

            tarefas[tarefaSelecionar + direcao] = tarefaSelecionada;
            tarefas[tarefaSelecionar + direcao].selecionado = true;
            tarefas[tarefaSelecionar] = tarefaMover;
        }

        salvarLista(tarefas, carregarLista);
    }

})();