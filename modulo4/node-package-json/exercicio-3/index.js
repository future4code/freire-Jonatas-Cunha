const tarefa = process.argv[2];

const listaTarefas = ["Correr", "Dormir", "Estudar", "Trabalhar"];

const Green = "\x1b[32m"
const Red = "\x1b[31m"
const Blue = "\u001b[34m"


if (!tarefa) {
    console.log(Red + "Tarefa inválida!");
    console.log(Blue + "Modelo: npm start tarefa");
} else {
    listaTarefas.push(tarefa);
    console.log(Green + "Tarefa adicionada com sucesso!");
}

console.log(listaTarefas);