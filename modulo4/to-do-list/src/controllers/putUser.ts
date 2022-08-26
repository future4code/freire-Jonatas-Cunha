import { Request, Response } from "express";
import connection from "../data/connection";

export default async function putUser (req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const { name, email, nickname } = req.body;
    const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
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
            if(!emailValid.test(email)){
                statusCode = 400;
                throw new Error('Email inválido!');
            }
        }

        await connection("tdUsers").where("id", id).update({
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
        }).then((result: any) => {

            if (result > 0) {
                statusCode = 200;
                res.status(statusCode).send({message: "Usuario atualizado com sucesso!"});
            } else {
                statusCode = 404;
                throw new Error("Usuario não encontrado!");
            }
        });
    } catch (error: any) {
        res.status(statusCode).send( {error: error.sqlMessage || error.message} );
    }
}