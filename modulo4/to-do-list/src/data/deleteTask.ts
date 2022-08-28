import connection from "./connection";

export default async function deleteTask(id: string): Promise<void> {

    await connection('tdTaskUsers').where('task_id', id).delete()
        .then(async () => {
            await connection('tdTasks').where('id', id).delete()
                .then(async (result) => {
                    if (result === 0) {
                        throw new Error("Tarefa não encontrada");
                    }
                })
        })
        .catch((err) => {
            throw new Error(err.message || err.sqlMessage);
        })
}