import connection from "./connection";

export default async function deleteFromResponsibleUserForTask (taskId: string, responsibleUserId: string) {
    await connection('tdTaskUsers')
    .where({task_id: taskId, responsible_user_id: responsibleUserId})
    .del()
    .then((resul) => {
       if (resul === 0) {
          throw new Error('Não encotramos nenhum registro para remover');
       }
    })
    .catch(err => {
         throw new Error(err.sqlMessage || err.message);
    })
}