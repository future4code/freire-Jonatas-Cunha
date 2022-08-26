import connection from "./connection";
import moment from "moment";

export default async function selectTaskById (id: string) {

    const result = await connection("tdTasks")
    .where("tdTasks.id", id)
    .join("tdUsers", "tdTasks.creator_user_id", "tdUsers.id")
    .select(
            "tdTasks.id AS taskId",
            "tdTasks.title",
            "tdTasks.description",
            "tdTasks.limit_date as limitDate",
            "tdTasks.status",
            "tdUsers.id AS creatorUserId",
            "tdUsers.nickname AS creatorUserNickname"
        );

        if(result.length > 0) {
            result[0].limitDate = moment(result[0].limitDate).format("DD/MM/YYYY");
            return result[0];
        } else {
            return null;
        }
}