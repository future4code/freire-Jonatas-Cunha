import { Request, Response } from "express";
import selectLateTasks from "../data/selectLateTasks";

export default async function getLateTasks(req: Request, res: Response): Promise<void> {
    try {

        const result = await selectLateTasks();

        if (result.length === 0) {
            res.status(404).send({ message: 'Nenhuma tarefa encontrada' });
        } else {
            res.status(200).send({tasks: result});
        }

    } catch (error: any) {
        res.status(500).send({ error: error.sqlMessage || error.message });
    }
}