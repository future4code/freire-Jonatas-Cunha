import { Request, Response } from 'express';
import insertTask from '../data/insertTask';
import moment from 'moment'

export default async function postTask (req: Request, res: Response): Promise<void> {

    let statusCode: number = 500;
    const { title, description, limiteDate, creatorUserId } = req.body;

    try {

        if (!title || !description || !limiteDate || !creatorUserId) {
            statusCode = 422;
            throw new Error('title, description, limiteDate e creatorUserId são obrigatórios');
        }

        if(!moment(limiteDate, "DD MM YYYY").isValid() || limiteDate.length !== 10){
            statusCode = 422;
            throw new Error('limiteDate deve ser uma data válida');
        }

       await insertTask(title, description, limiteDate, creatorUserId).then(() => {
            statusCode = 201;
            res.status(statusCode).send();
        }).catch((error: any) => {
            statusCode = 500;
            res.status(statusCode).send(error.message);
        });


    } catch (error: any) {
        res.status(statusCode).send( {error: error.sqlMessage || error.message});
    }
  
}