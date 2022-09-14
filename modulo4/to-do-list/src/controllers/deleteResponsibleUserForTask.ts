import { Request, Response } from 'express';
import deleteFromResponsibleUserForTask from '../data/deleteResponsibleUserForTask';

export default async function deleteResponsibleUserForTask(req: Request, res: Response) {
    const { taskId, responsibleUserId } = req.params as { taskId: string, responsibleUserId: string };
    let statusCode = 500;
    try {
        await deleteFromResponsibleUserForTask(taskId, responsibleUserId).then((result) => {
            statusCode = 200;
            res.status(statusCode).send({ message: 'Responsabilidade removida!' });
        }).catch((err) => {
            statusCode = 500;
            throw new Error(err.sqlMessage || err.message);
        });
    }
    catch (error: any) {
        res.status(statusCode).json({ message: error.message || error.sqlMessage });
    }
}