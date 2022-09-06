import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function getAllUsersWithPagination(req: Request, res: Response): Promise<any> {

    const page: number = Number(req.query.page) || 1;
    const offset: number = (page - 1) * 5;
    let statusCode: number = 500;

    try {

        if (page < 1) {
            statusCode = 400;
            throw new Error("Page must be greater than 1")
        }

        const result = await connection('Users_atv')
            .select('id', 'name', 'email', 'type')
            .limit(5)
            .offset(offset)

        if (result.length == 0) {
            statusCode = 404;
            throw new Error("No user found")
        }

        statusCode = 200;
        res.status(statusCode).send(result)

    } catch (error: any) {
        res.status(statusCode).send({ message: error.message || error.sqlMessage })
    }
}