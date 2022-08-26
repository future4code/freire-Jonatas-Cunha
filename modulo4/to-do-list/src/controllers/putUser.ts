import { Request, Response } from "express";
import * as EmailValidator from "email-validator";
import updateUsers from "../data/updateUser";

export default async function putUser (req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const { name, email, nickname } = req.body;
    let statusCode: number = 500;

    try {

        if (!id) {
            statusCode = 400;
            throw new Error('Id é obrigatório!');
        }

        if (!name && !email && !nickname) {
            statusCode = 400;
            throw new Error('Nenhum campo foi preenchido!');
        }

        if(name === "" || email === "" || nickname === "") {
            statusCode = 400;
            throw new Error('O campo não pode ser vazio!');
        }

        if(email){
            if(!EmailValidator.validate(email)){
                statusCode = 400;
                throw new Error('Email inválido!');
            }
        }

        await updateUsers(id, name, nickname, email).then(() => {
            statusCode = 200;
            res.status(statusCode).send({message: "Usuário atualizado com sucesso!"});
        }).catch((error) => {
            statusCode = 500;
            res.status(statusCode).send({error: error.message}).end();
        })


    } catch (error: any) {
        res.status(statusCode).send( {error: error.sqlMessage || error.message} );
    }
}