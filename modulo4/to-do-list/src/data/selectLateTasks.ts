import connection from "./connection";
import moment from "moment";

export default async function selectLateTasks(search: string) {

    let result = await connection('tdTasks')
        .where('status', search)
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

        result.filter(task => {
            if (moment(task.limitDate).isBefore(moment())) {
                return task;
            }
        })

    }



    return result;

}