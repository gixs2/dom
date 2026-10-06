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
     inputTarefa.value = "";
     inputTarefa.focus();
}
function salvarTarefa() {
   localStorage.setItem(
     "tarefas",
     JSON.stringify(tarefas)

   );
}
