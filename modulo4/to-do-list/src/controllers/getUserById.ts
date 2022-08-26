import { Request, Response } from "express";
import connection from "../data/connection";

export default async function getUserById(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    let statusCode: number = 500;

    try {

        if (!id) {
            statusCode = 400;
            throw new Error('Id é obrigatório!');
        }

        await connection("tdUsers").where("id", id).select("id", "nickname").then((result: any) => {

            if (result.length > 0) {
                statusCode = 200;
                res.status(statusCode).send(result[0]);
            } else {
                statusCode = 404;
                res.status(statusCode).send({message: "Usuario não encontrado!"});
            }
        });

    } catch (error: any) {
        res.status(statusCode).send( error.sqlMessage || error.message );
    }
}