// Métodos DOM
const form = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#tarefa');
const contador = document.querySelector('#contador');
const listaTarefas = document.querySelector('#lista-tarefas');

// Resgate de tarefas do localStorage
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Ouvir e agir sobre o clique
form.addEventListener('submit', adicionarTarefa);

// Funções
function adicionarTarefa(event) {
    event.preventDefault();
    const texto = inputTarefa.value.trim();
    if (texto === '') {
        alert('Digite uma tarefa!');
        return;
    }
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };
    tarefas.push(novaTarefa);
    salvarTarefa();
    renderizarTarefas();
    inputTarefa.value = '';
    inputTarefa.focus();

    console.log(novaTarefa);
}

function renderizarTarefas(){
    listaTarefas.textContent = '';
    tarefas.forEach(function(tarefa, indice){
        const linha =  document.createElement('tr');

        const colunaNumero = document.createElement('td');
        colunaNumero.textContent = indice + 1;

        const colunaNome = document.createElement('td');
        colunaNome.textContent = tarefa.texto;

        if (tarefa.concluida) {
            colunaNome.classList.add(
                'text-decoration-line-through',
                'text-muted'
            );
        }
        const colunasStatus = document.createElement('td');
        if (tarefa.concluida) {
            colunasStatus.innerHTML = '<span class="badge text-bg-success">Concluída</span>';
        } else {
            colunasStatus.innerHTML = '<span class="badge text-bg-warning">Pendente</span>';
        }

        const colunaAcoes = document.createElement('td');

        const botaoConcluir = document.createElement('button');
        botaoConcluir.textContent =
            tarefa.concluida
                ? 'Reabrir'
                : 'Concluir';
        botaoConcluir.classList.add(
            
      
            "btn",
            tarefa.concluida
                ? "btn-warning"
                : "btn-success",
            "btn-sm",
            "me-2"
        );
         botaoConcluir.addEventListener(
                "click",
                 function() {
                  alterarStatus(tarefa.id);
                }
         );
        const botaoEditar = document.createElement('button');
        const botaoExcluir = document.createElement('button');

        colunaAcoes.appendChild(botaoConcluir);


        linha.appendChild(colunaNumero);
        linha.appendChild(colunaNome);
        linha.appendChild(colunasStatus);
        linha.appendChild(colunaAcoes);

        listaTarefas.appendChild(linha);
        });

}

function salvarTarefa(){
    localStorage.setItem(

        'tarefas', 
        JSON.stringify(tarefas));
}
 function alterarStatus(id) {
    tarefas.forEacha(function(tarefa){
       if (tarefa.id === id) {g
            tarefa.concluida =!tarefa.concluida;

       }
    });
 }

renderizarTarefas();
