import connection from "./connection";

export default async function updateTaskStatus(id: string, status: string) {

    await connection('tdTasks').where('id', id)
        .select('tdTasks.status')
        .then(async (result: any) => {
            if (result.length === 0) {
                throw new Error('Task not found');
            }
            else if (result[0].status === status) {
                throw new Error('A tarefa já está com este status!');

            } else {
                await connection('tdTasks').update({
                    status: status
                }).where('id', id)
                    .catch((error: any) => {
                        throw new Error(error.message || error.sqlMessage);
                    })
            }
        })
        .catch((error: any) => {
            throw new Error(error.message || error.sqlMessage);
        })

}