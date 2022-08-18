import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());



// 1.
app.get("/ping", (req, res) => {          
    res.status(200).send("Pong! 🏓")
})

// 2. 

type Tarefa = {
    userId: string;
    id: string;
    title: string;
    completed: boolean;
}

// 3.
const tarefas: Tarefa[] = [
    {
        userId: "1",
        id: "1",
        title: "Estudar Typescript",
        completed: true
    },
    {
        userId: "1",
        id: "2",
        title: "Estudar Node",
        completed: false
    },
    {
        userId: "2",
        id: "3",
        title: "Estudar React",
        completed: true
    },
    {
        userId: "2",
        id: "4",
        title: "Estudar Angular",
        completed: false
    }
]

// 4. E 5.
app.get("/tarefas", (req, res) => {
    const status = req.query.status;

    if (status === "complete") {
        res.status(200).send(tarefas.filter(tarefa => tarefa.completed))
    } else if (status === "incomplete") {
        res.status(200).send(tarefas.filter(tarefa => !tarefa.completed))
    } else {
        res.status(200).send(tarefas)
    }
})


// 6.
app.put("/tarefas/:id", (req, res) => {
    const id = req.params.id;
    const tarefa = tarefas.find(tarefa => tarefa.id === id);

    if (!tarefa) {
        res.status(404).send({error: "Tarefa não encontrada"})
    } else {
        tarefa.completed = !tarefa.completed;
        res.status(200).send({
            menssage: "Tarefa atualizada com sucesso",
            tarefa: tarefa,
        })
    }

})

// 7.
app.delete("/tarefas/:id", (req, res) => {
    const id = req.params.id;
    const tarefa = tarefas.find(tarefa => tarefa.id === id);

    if (!tarefa) {
        res.status(404).send({error: "Tarefa não encontrada"})
    } else {
        tarefas.splice(tarefas.indexOf(tarefa), 1);
        res.status(200).send({
            menssage: "Tarefa deletada com sucesso",
            tarefa: tarefa,
        })
    }

})

// 9.
// DOCUMENTAÇÃO: https://documenter.getpostman.com/view/19882336/VUjTm4Fa


// 8. COM DESAFIO 10.

app.get("/tarefas/:userId", (req, res) => {
    const userId = req.params.userId;
    const tarefa = tarefas.filter(tarefa => tarefa.userId === userId);
    const otherTarefa = tarefas.filter(tarefa => tarefa.userId !== userId);
    res.status(200).send(
        {
            todos: {
                selectedUser: [
                    ...tarefa
                ],
                others: [
                    ...otherTarefa
                ]
            }
        }
    )

})


app.listen(3003, () => {
    console.log('Server started on port 3003');
})