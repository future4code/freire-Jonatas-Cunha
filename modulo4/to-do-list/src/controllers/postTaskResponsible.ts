import { Request, Response } from "express";
import insertTaskUser from "../data/insertTaskUser";


export default async function postTaskResponsible(req: Request, res: Response): Promise<void> {
    let statusCode: number = 500;
    try {

        const { taskId, userId } = req.body as { taskId: string, userId: string };

        if (!taskId || !userId || taskId === "" || userId === "") {
            statusCode = 422;
            throw new Error('taskId e userId são obrigatórios');
        }

        await insertTaskUser(taskId, userId).then(() => {
            statusCode = 201;
            res.status(statusCode).send({ mensagem: "Atribuição realizada com sucesso!" });
        }).catch((error: any) => {
            statusCode = 500;
            throw new Error(error.message);
        })

    } catch (error: any) {
        res.status(statusCode).send({error: error.message});
    }
}