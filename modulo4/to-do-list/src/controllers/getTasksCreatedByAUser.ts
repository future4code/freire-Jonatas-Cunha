import { Request, Response } from "express";
import connection from "../data/connection";
import moment from "moment";

export default function getTasksCreatedByAUser(req: Request, res: Response): void {
    const userId = req.query.creatorUserId as string;
    let statusCode: number = 500;

    try {

        connection("tdTasks").where("creator_user_id", userId).join("tdUsers", "creator_user_id", "tdUsers.id")
        .select(
            "tdTasks.id AS taskId",
            "tdTasks.title",
            "tdTasks.description",
            "tdTasks.limit_date as limitDate",
            "tdTasks.status",
            "tdUsers.id AS creatorUserId",
            "tdUsers.nickname AS creatorUserNickname",
        ).then((task: any) => {
            if (task.length > 0) {
                statusCode = 200;
                task.map((task: any) => task.limitDate = moment(task.limitDate).format("DD/MM/YYYY"));
                res.status(statusCode).json({ tasks: task });
            } else {
                statusCode = 404;
                res.status(statusCode).json({ error: "Usuario não possui nenhuma task!" }).end();
            }
        })

    } catch (error: any) {
        res.status(500).send({ error: error.sqlMessage || error.message });
    }
}