import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUsers";

export const getAllUsers = async (req: Request, res: Response) => {

    let statusCode: number = 500;

    try {
        const users = await selectAllUsers();

        if (!users.length) {
            res.statusCode = 404;
            throw new Error("No users found");
        }

        statusCode = 200;
        res.status(statusCode).send(users);

    } catch (error: any) {
        error.sqlMessage ? res.status(500).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }
};