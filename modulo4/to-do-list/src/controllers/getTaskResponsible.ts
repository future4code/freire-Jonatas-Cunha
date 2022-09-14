import { Request, Response } from 'express';
import selectTaskUserResponsible from '../data/selectTaskUserResponsible';

export default async function getTaskResponsible(req: Request, res: Response) {
    const id = req.params.id;
    let statusCode = 500;
        try {
            await selectTaskUserResponsible(id)
            .then(result => {
                if (result.length > 0) {
                    statusCode = 200;
                    res.status(statusCode).send({users: result});
                } else {
                    statusCode = 404;
                    res.status(statusCode).send({message: "Nenhum usuário encontrado"});
                }
            })
            .catch(err => {
                statusCode = 500;
               throw new Error(err.message);
            })


        } catch (error:any) {
            res.status(statusCode).send(error.message || error.sqlMessage);
        }
}
