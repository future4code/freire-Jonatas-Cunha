import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id as string;
    let statusCode: number = 500;

    try {

        if (!id) {
            statusCode = 400;
            throw new Error('Id é obrigatório!');
        }

        const result = await selectUserById(id);

        if (result) {
            statusCode = 200;
            res.status(statusCode).send(result);
        } else {
            statusCode = 404;
            throw new Error(`Usuário com id ${id} não encontrado!`);
        }

    } catch (error: any) {
        res.status(statusCode).send( {error: error.sqlMessage || error.message} );
    }
}