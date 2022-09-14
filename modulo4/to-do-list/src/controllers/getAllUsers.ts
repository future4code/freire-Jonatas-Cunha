import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";

export default async function getAllUsers(req: Request, res: Response) {
    try {

        const users = await selectAllUsers();

        if (users.length > 0) {
            res.status(200).send({users: users});
        } else {
            res.status(204).end();
        }
        
    } catch (error: any) {
        res.status(500).json({ error: error.sqlMessage });
    }
}