import { Request, Response } from "express";
import connection from "../data/connection";
import moment from "moment";

export default function getTaskById(req: Request, res: Response): void {

    let statusCode: number = 500;
    const id = req.params.id;

    try {

        if (!id) {
            statusCode = 422;
            throw new Error('id é obrigatório');
        }

        connection("tdTasks").where("tdTasks.id", id).join("tdUsers", "tdTasks.creator_user_id", "tdUsers.id")
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
                task[0].limitDate = moment(task[0].limitDate).format("DD/MM/YYYY");
                res.status(statusCode).json(task[0]);
            } else {
                statusCode = 404;
                res.status(statusCode).json({ error: "Task não encontrada!" }).end();
            }
        })

    }catch (error: any) {
        res.status(statusCode).send({ error: error.sqlMessage || error.message });
    }
}