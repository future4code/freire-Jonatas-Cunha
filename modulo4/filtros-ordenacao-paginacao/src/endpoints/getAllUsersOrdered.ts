import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function getUserByType(req: Request, res: Response): Promise<any> {

    const order: string = req.query.order as string;
    let element: string = req.query.element as string;
    let statusCode: number = 500;

    try {
        if (order && (order !== "asc" && order !== "desc")) {
            statusCode = 400;
            throw new Error("Order must be asc or desc")
        }

        if (element && (element !== "name" && element !== "type")) {
            statusCode = 400;
            throw new Error("Element must be name or type")
        } else {
            element = "name"
        }

        const result = await connection('users')
            .select('id', 'name', 'email', 'type')
            .orderBy(element, order)

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