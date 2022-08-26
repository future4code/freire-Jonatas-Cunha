import { Request, Response } from "express";
import connection from "../data/connection";
import { v4 as uuidv4 } from "uuid";

export default async function postUser(req: Request, res: Response): Promise<void> {

    const name: string = req.body.name as string;
    const nickname: string = req.body.nickname as string;
    const email: string = req.body.email as string;
    const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
    let statusCode: number = 500;

    try {

        if (!name || !nickname || !email) {
            statusCode = 422;
            throw new Error('name, nickname e email são obrigatórios');
        }

        if(!emailValid.test(email)){
            statusCode = 422;
            throw new Error('Email inválido!');
        }

        await connection("tdUsers").insert({
            id: uuidv4(),
            name: name,
            nickname: nickname,
            email: email
        }).then(() => {
            statusCode = 201;
            res.status(statusCode).send({message: "Usuario criado com sucesso!"});
        }).catch(() => {
            statusCode = 500;
            res.status(statusCode).send({message: "Erro ao criar usuario!"});
        })


    } catch (error: any) {
        res.status(statusCode).send({error: error.sqlMessage || error.message});
    }

}