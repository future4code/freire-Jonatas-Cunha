import { Request, Response } from 'express';
import updateTaskStatus from '../data/updateTaskStatus';
import { Status } from '../types';

export default async function putTaskStatus(req: Request, res: Response) {
    const id = req.params.id;
    const status  = req.body.status.toLowerCase();
    let statusCode = 500;



    try {

        if(!id || id === '') {
            statusCode = 400;
            throw new Error('O ID não pode ser vazio!');
        }

        if (status !== Status.TODO && status !== Status.DOING && status !== Status.DONE) {
            statusCode = 400;
            throw new Error('Estado inválido');
        } 



        await updateTaskStatus(id, status).then((result: any) => {
            statusCode = 200;
            res.status(statusCode).send({message : 'Estado atualizado com sucesso!'});
        })

    }  catch (error: any) {
       res.status(statusCode).send({message : error.message || error.sqlMessage});
    }
}
