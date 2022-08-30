import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function getUserByName(req: Request, res: Response): Promise<any> {

    const name: string = req.query.filter as string;
    let statusCode: number = 500;

    try {
        if (!name) {
            throw new Error("Filter is required")
        }

        const result = await connection('Users_atv')
            .select('id', 'name', 'email', 'type')
            .where('name', 'like', `%${name}%`)

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