(function () {

    const adicionar = document.getElementById("adicionar");

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

    const adicionarTarefa = function () {
        let tarefas = new Array();
        const tarefa = document.getElementById("tarefa").value.trim();

        if (localStorage.hasOwnProperty("tarefas")) {
            tarefas = JSON.parse(localStorage.getItem("tarefas"));
        }

        if (validarAdicionarTarefa(tarefas, tarefa)) {

            document.getElementById("tarefa").value = "";
            tarefas.forEach(function (tarefa, i) {
                tarefa.selecionado = false;
            });
            tarefas.unshift({ "nome": tarefa, "concluido": false, "selecionado": true })

            salvarLista(tarefas, carregarLista);
        }
    }

    const validarAdicionarTarefa = function (tarefas, tarefa) {

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

    const carregarLista = function () {
        let tarefas = new Array();

        if (localStorage.hasOwnProperty("tarefas")) {
            tarefas = JSON.parse(localStorage.getItem("tarefas"));
        }

        montarLista(tarefas);
    }

    const montarLista = function (tarefas) {
        const listaTarefas = document.querySelector(".lista-tarefas");
        listaTarefas.innerHTML = "";
        const ul = document.createElement("ul");

        tarefas.forEach(function (tarefa, i) {

            const id = "tarefa-" + i;
            const nome = tarefa.nome;

            const checkbox = document.createElement("input");
            checkbox.id = id;
            checkbox.type = "checkbox";
            checkbox.checked = tarefa.concluido;
            checkbox.addEventListener("click", function () {
                concluirTarefa(nome);
            });

            const label = document.createElement("label");
            label.innerHTML = nome;
            label.setAttribute("for", id);

            const divTarefa = document.createElement("div");
            divTarefa.appendChild(checkbox);
            divTarefa.appendChild(label);

            const iconeExcluir = document.createElement("i");
            iconeExcluir.classList.add("fas", "fa-trash-alt");
            iconeExcluir.addEventListener("click", function () {
                excluirTarefa(nome);
            });

            const divIcone = document.createElement("div");
            divIcone.appendChild(iconeExcluir);

            const li = document.createElement("li");
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
            const listaVazia = document.createElement("h4");
            listaVazia.innerHTML = "Nenhuma tarefa adicionada a sua lista.";
            listaTarefas.appendChild(listaVazia);
        }
    }

    const salvarLista = function (tarefas, callback) {

        localStorage.setItem("tarefas", JSON.stringify(tarefas));

        if (callback) {
            callback();
        }
    }

    const excluirTarefa = function (tarefa) {

        const tarefas = JSON.parse(localStorage.getItem("tarefas"));
        const tarefaExcluir = tarefas.findIndex(x => x.nome == tarefa);

        const confirmaExclusao = confirm(`Deseja realmente excluir a tarefa "${tarefa}"?`);
        if (confirmaExclusao) {
            tarefas.splice(tarefaExcluir, 1);
        }

        if (tarefas[0]) {
            tarefas[0].selecionado = true;
        }

        salvarLista(tarefas, carregarLista);
    }

    const excluirTarefaAtalho = function () {

        const tarefas = JSON.parse(localStorage.getItem("tarefas"));
        const tarefaExcluir = tarefas.find(x => x.selecionado == true);

        if (tarefaExcluir) {
            excluirTarefa(tarefaExcluir.nome);
        }
    }

    const concluirTarefa = function (tarefa) {

        const tarefas = JSON.parse(localStorage.getItem("tarefas"));
        const tarefaConcluir = tarefas.findIndex(x => x.nome == tarefa);

        tarefas[tarefaConcluir].concluido = !tarefas[tarefaConcluir].concluido;

        salvarLista(tarefas, carregarLista);
    }

    const concluirTarefaAtalho = function () {

        const tarefas = JSON.parse(localStorage.getItem("tarefas"));
        const tarefaConcluir = tarefas.find(x => x.selecionado == true);

        if (tarefaConcluir) {
            concluirTarefa(tarefaConcluir.nome);
        }
    }

    const navegar = function (direcao) {

        const tarefas = JSON.parse(localStorage.getItem("tarefas"));
        const tarefaSelecionar = tarefas.findIndex(x => x.selecionado == true);

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

    const mover = function (direcao) {

        const tarefas = JSON.parse(localStorage.getItem("tarefas"));
        const tarefaSelecionar = tarefas.findIndex(x => x.selecionado == true);

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
            const tarefaSelecionada = tarefas[tarefaSelecionar];
            const tarefaMover = tarefas[tarefaSelecionar + direcao];

            tarefas[tarefaSelecionar + direcao] = tarefaSelecionada;
            tarefas[tarefaSelecionar + direcao].selecionado = true;
            tarefas[tarefaSelecionar] = tarefaMover;
        }

        salvarLista(tarefas, carregarLista);
    }

})();