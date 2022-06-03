```
function filtraTarefas() {

const tarefas = [

    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 } 
 ] 


    const atividadesFeitas = tarefas.filter((tarefa) => {
        return tarefa.status === "done"
  })

  const nomeAtivadesFeitas = atividadesFeitas.map((tarefa) => {
    return tarefa.titulo
  })
  
  return nomeAtivadesFeitas
}

-------------------------------------------------OU------------------------------------------------------

function filtraTarefas() {

  let nomeAtividades = []
  
  for(let atividade of tarefas){
    if(atividade.status === "done"){
      nomeAtividades.push(atividade.titulo)
    }
  }
  return nomeAtividades
}




------------------------------------------------------ ou --------------------------------------------------------

function filtraTarefas() {

  let nomeAtividades = []
  
  for(let i = 0; i < tarefas.length; i++){
    if(tarefas[i].status === "done"){
      nomeAtividades.push(tarefas[i].titulo)
    }
  }
  return nomeAtividades

}
