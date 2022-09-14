import connection from "./connection";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../types";

export default async function insertTask(task: Task): Promise<void> {
    const { title, description, limiteDate, creatorUserId } = task;
    await connection("tdTasks").insert({
        id: uuidv4(),
        title: title,
        description: description,
        status: "to_do",
        limit_date: limiteDate,
        creator_user_id: creatorUserId
    }).then(() => {
        return true;
    }).catch(() => {
        throw new Error('Erro ao inserir tarefa');
    })
}