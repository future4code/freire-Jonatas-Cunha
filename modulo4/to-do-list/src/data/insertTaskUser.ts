import connection from "./connection";

export default async function insertTaskUser(taskId: string, userId: string): Promise<void> {

    const result = await connection("tdTaskUsers")
        .select("*")
        .where({ task_id: taskId, responsible_user_id: userId })
        .then(async (rows) => {
            if (rows.length === 0) {
                await connection("tdTaskUsers").insert({
                    task_id: taskId,
                    responsible_user_id: userId
                })
                .catch((error: any) => {
                    throw new Error(error.sqlMessage);
                })
            } else {
               throw new Error("Usuário já atribuído a tarefa");
            }
        }).catch((error: any) => {
            throw new Error(error.sqlMessage || error.message);
        })

    return result;

}