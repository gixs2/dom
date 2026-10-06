//metodos Dom
const form = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#tarefa");
const contador = document.querySelector("#contador");
const listaTarefa = document.querySelector("#lista-tarefa");

//Rresgate de tarefa do localStorage
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// ouvir e agir sobre
   form.addEventListener("submit", adicionarTarefa);

// funçoes
function adicionarTarefa(event) {
      event.preventDefault();
    const texto = inputTarefa.value.trim();
    if (texto === ""){
        alert("Digite uma tarefa");
         return;  
    }
    const novaTarefa = {
      id: Date.now(),
      texto: texto, 
      concluidas: false 
    };
     tarefas.push(novaTarefa);
     salvarTarefa();
     renderizarTarefas();
     inputTarefa.value = "";
     inputTarefa.focus();
}
function renderizarTarefas(){
    tarefas.forEach(function (tarefa, indice) {
        const linha = document.createElement("tr");

        const colunaNumero = document.createElement("td");
        colunaNumero.textContent = indice + 1;

        const colunaNome = document.createElement("td");
        colunaNome.textContent = tarefa.texto;
 
        if (tarefa.concluida){
            colunaNome.classList.add(
                "text-decoration-line-through", 
                "text-muted"
            );
        }
     const colunaStatus = document.createElement("td");
     if (tarefa.concluida){
        colunaStatus.innerHTML  = '<span class= "badge text-bg-success">Concluida</span>';
     } else{
        colunaStatus. innerHTML ='<span class= "badge text-bg-success">Pendentes</span>';
     }
     
     linha.appendChild(colunaNumero);
     linha.appendChild(colunaNome);
     linha.appendChild(colunaStatus);

     listaTarefa.appendChild(linha);

     


    });

        
    };

function salvarTarefa() {
   localStorage.setItem(
     "tarefas",
     JSON.stringify(tarefas)
   );
}

