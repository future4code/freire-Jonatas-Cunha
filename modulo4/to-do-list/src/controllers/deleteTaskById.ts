import { Request, Response } from 'express';
import deleteTask from '../data/deleteTask';

export default async function deleteTaskById(req: Request, res: Response): Promise<void> {
    const id = req.params.id as string;
    let statusCode: number = 500;

    try {

        await deleteTask(id).then(() => {
            statusCode = 200;
            res.status(statusCode).send({ message: "Tarefa deletada com sucesso" });
        })

    }
    catch (err: any) {
        res.status(statusCode).send({ message: err.message || err.sqlMessage });
    }
}