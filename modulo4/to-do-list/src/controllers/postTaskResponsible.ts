import { Request, Response } from "express";
import insertTaskUser from "../data/insertTaskUser";


export default async function postTaskResponsible(req: Request, res: Response): Promise<void> {
    let statusCode: number = 500;
    try {

        const { taskId, userId } = req.body;

        if (!taskId || taskId === "" || userId.length === 0 || typeof userId !== "object") {
            statusCode = 422;
            throw new Error('taskId e userId são obrigatórios');
        }


        const responsible = userId.map( (id: string, ) => (
            {
                responsible_user_id: id,
                task_id : taskId
            }
        ))

        await insertTaskUser(responsible).then(() => {
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