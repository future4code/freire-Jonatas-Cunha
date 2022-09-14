import connection from "./connection";
import moment from "moment";

export default async function selectTaskByCreator(userId: string): Promise<any> {

    const result = await connection("tdTasks")
        .where("creator_user_id", userId)
        .join("tdUsers", "creator_user_id", "tdUsers.id")
        .select(
            "tdTasks.id AS taskId",
            "tdTasks.title",
            "tdTasks.description",
            "tdTasks.limit_date as limitDate",
            "tdTasks.status",
            "tdUsers.id AS creatorUserId",
            "tdUsers.nickname AS creatorUserNickname",
        );

    if (result.length > 0) {
        result.map((task: any) => task.limitDate = moment(task.limitDate).format("DD/MM/YYYY"));
        return result;
    } else {
        return null
    }
}