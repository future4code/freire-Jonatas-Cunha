import connection from "./connection";
import moment from "moment";

export default async function selectLateTasks() {

    const result = await connection('tdTasks')
        .where('limit_date', '<', moment().format('YYYY-MM-DD'))
        .join('tdUsers', 'tdTasks.creator_user_id ', '=', 'tdUsers.id')
        .select(
            "tdTasks.id",
            "title",
            "description",
            "status",
            "limit_date as limitDate",
            "creator_user_id as creatorUserId",
            "tdUsers.name as creatorUserName"
        )

    if (result.length > 0) {
        result.forEach(task => {
            task.limitDate = moment(task.limitDate).format('DD/MM/YYYY')
        })
    }
    
    return result;
}