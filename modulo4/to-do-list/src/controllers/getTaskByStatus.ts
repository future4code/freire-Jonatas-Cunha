import { Request, Response } from 'express';
import selectTaskByStatus from '../data/selectTaskByStatus';
import { Status } from '../types';

export default async function getTaskByStatus(req: Request, res: Response) {
    const search = req.query.status as string;
    let statusCode = 500;
        try {

            if(search !== Status.TODO && search !== Status.DOING && search !== Status.DONE) {
                statusCode = 400;
                throw new Error('O status deve ser to_do, doing ou done');
            }
           
            await selectTaskByStatus(search)
                .then(result => {
                    if (result.length === 0) {
                        res.status(404).send({ message: 'Nenhuma tarefa encontrada' });
                    } else {
                        res.status(200).send({tasks: result});
                    }
                })
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
}