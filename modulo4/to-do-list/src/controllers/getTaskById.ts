import { Request, Response } from "express";
import selectTaskById from "../data/selectTaskById";

export default async function getTaskById(req: Request, res: Response): Promise<void> {

    let statusCode: number = 500;
    const id = req.params.id;

    try {

        if (!id) {
            statusCode = 422;
            throw new Error('id é obrigatório');
        }

        const result = await selectTaskById(id);

        if (result) {
            statusCode = 200;
            res.status(statusCode).send(result);
        } else {
            statusCode = 404;
            res.status(statusCode).send({ message: "Nenhum resultado corresponde ao id pesquisado." }).end();
        }

    }catch (error: any) {
        res.status(statusCode).send({ error: error.sqlMessage || error.message });
    }
}