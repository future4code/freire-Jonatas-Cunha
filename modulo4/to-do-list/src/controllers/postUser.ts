import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import * as EmailValidator from 'email-validator';

export default async function postUser(req: Request, res: Response): Promise<void> {

    const name: string = req.body.name as string;
    const nickname: string = req.body.nickname as string;
    const email: string = req.body.email as string;
    let statusCode: number = 500;

    try {

        if (!name || !nickname || !email) {
            statusCode = 422;
            throw new Error('name, nickname e email são obrigatórios');
        }

        if(!EmailValidator.validate(email)){
            statusCode = 422;
            res.status(statusCode).send({error: "Email inválido"}).end();
        }

        await insertUser(name, nickname, email).then(() => {
            statusCode = 201;
            res.status(statusCode).send();
        }).catch((error) => {
            statusCode = 500;
            res.status(statusCode).send({error: error.message}).end();
        })


    } catch (error: any) {
        res.status(statusCode).send({error: error.sqlMessage || error.message});
    }

}