import connection from "./connection";
import moment from "moment";

export default async function selectSearchTask (search: string): Promise<any> {
   const result = await connection('tdTasks')
    .where('title', 'like', `%${search}%`)
    .orWhere('description', 'like', `%${search}%`)
    .orWhere('status', 'like', `%${search}%`)
    .join('tdUsers', 'tdTasks.creator_user_id', '=', 'tdUsers.id')
    .select(
        'tdTasks.id',
        'tdTasks.title',
        'tdTasks.description',
        'tdTasks.status',
        'tdTasks.limit_date AS limitDate',
        'tdTasks.creator_user_id AS creatorUserId',
        'tdUsers.nickname AS creatorUserNickname'
    )
    .then(result => {
        result.map(task => {task.limitDate = moment(task.limitDate).format('DD/MM/YYYY')})
        return {task: result};
    })
    .catch(error => {
       throw new Error(error.message || error.sqlMessage);
    })

    return result;
}
