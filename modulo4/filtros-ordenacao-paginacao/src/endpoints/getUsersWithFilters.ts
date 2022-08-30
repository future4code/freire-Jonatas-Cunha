import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function getUsersWithFilters(req: Request, res: Response): Promise<any> {

    let filterName: string = req.query.filterName as string;
    let type: string = req.params.type as string;
    let order: string = req.query.order as string;
    let element: string = req.query.element as string;
    const page: number = Number(req.query.page) || 1;

    
    const offset: number = (page - 1) * 5;
    let statusCode: number = 500;

    try {

        if (page < 1) {
            statusCode = 400;
            throw new Error("Page must be greater than 1")
        }

        if (order && (order !== "asc" && order !== "desc")) {
            order = "asc";
        }
        if ((element && (element !== "name" && element !== "type")) || !element) {
            element = "name"
        }

        if (!type || (type !== "admin" && type !== "user")) {
            type = ""
        }

        if (!filterName) {
            filterName = ""
        }

        const result = await connection('Users_atv')
            .select('id', 'name', 'email', 'type')
            .where(`name`, 'LIKE', `%${filterName}%`)
            .where(`type`, 'LIKE', `%${type}%`)
            .orderBy(element, order)
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