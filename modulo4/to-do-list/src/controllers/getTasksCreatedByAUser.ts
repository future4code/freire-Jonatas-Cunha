import { Request, Response } from "express";
import selectTaskByCreator from "../data/selectTaskByCreator";

export default async function getTasksCreatedByAUser(req: Request, res: Response): Promise<void> {
    const userId = req.query.creatorUserId as string;
    let statusCode: number = 500;

    try {


        if (!userId) {
            statusCode = 422;
            throw new Error('id é obrigatório');
        }

        const result = await selectTaskByCreator(userId);

        if (result) {
            statusCode = 200;
            res.status(statusCode).send({tasks: result}).end();
        } else {
            statusCode = 404;
            res.status(statusCode).send({message: "Nenhuma tarefa encontrada"}).end();
        }

    } catch (error: any) {
        res.status(500).send({ error: error.sqlMessage || error.message });
    }
}