import { TaskUser } from "../types";
import connection from "./connection";

export default async function insertTaskUser(responsible: TaskUser[]): Promise<void> {

    let noDuplicated: TaskUser[] = [];

    const taskResponsible = await connection("tdTaskUsers")
    .where("task_id", responsible[0].task_id)
    .select("responsible_user_id")
    .catch((error: any) => {
        throw new Error(error.sqlMessage);
    })

   taskResponsible.forEach((task: any) => {
        responsible.forEach((user: any) => {
            if (task.responsible_user_id === user.responsible_user_id) {
                throw new Error("Usuário já está atribuido a essa tarefa");
            }
        } )
    })

  
    responsible.forEach((user: any) => {
        if (!noDuplicated.some((task: any) => task.responsible_user_id === user.responsible_user_id)) {
            noDuplicated.push(user);
        }
    })

    await connection("tdTaskUsers").insert(noDuplicated).catch((error: any) => {
        throw new Error(error.sqlMessage);
    })

}