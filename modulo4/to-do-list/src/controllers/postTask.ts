import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import connection from '../data/connection';
import moment from 'moment'

enum Status {
    TODO = "to_do",
    DOING = "doing",
    DONE = "done"
}

export default function postTask (req: Request, res: Response): void {

    let statusCode: number = 500;
    const { title, description, limiteDate, creatorUserId } = req.body;

    try {

        if (!title || !description || !limiteDate || !creatorUserId) {
            statusCode = 422;
            throw new Error('title, description, limiteDate e creatorUserId são obrigatórios');
        }

        if(!moment(limiteDate, "DD MM YYYY").isValid()){
            statusCode = 422;
            throw new Error('limiteDate deve ser uma data válida');
        }


        connection("tdTasks").insert({
            id: uuidv4(),
            title: title,
            description: description,
            status: Status.TODO,
            limit_date: moment(limiteDate, "DD MM YYYY").format("YYYY-MM-DD"),
            creator_user_id: creatorUserId
        }).then(() => {
            statusCode = 201;
            res.status(statusCode).send({message: "Tarefa criada com sucesso!"});
        }).catch(error => {
            statusCode = 500;
            res.status(statusCode).send({error: error.sqlMessage});
        })

    } catch (error: any) {
        res.status(statusCode).send( {error: error.sqlMessage || error.message});
    }
  
}