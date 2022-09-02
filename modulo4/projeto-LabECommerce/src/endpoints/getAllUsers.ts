import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUsers";
import { UserData } from "../types/User";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {

    let statusCode: number = 500;

    try {
        const users: UserData[] | undefined = await selectAllUsers();

        if (!users) {
            res.statusCode = 404;
            throw new Error("No users found");
        }

        statusCode = 200;
        res.status(statusCode).send(users);

    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }
};