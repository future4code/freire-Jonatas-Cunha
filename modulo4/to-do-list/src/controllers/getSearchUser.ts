import { Request, Response } from 'express';
import connection from '../data/connection';

export default async function getSearchUser(req: Request, res: Response) {
    const query = req.query.query;
    let statusCode = 500;

    try {

        await connection('tdUsers').select("id", "nickname")
        .where("nickname", "like", `%${query}%`)
        .then((users) => {
            if (users.length > 0) {
                statusCode = 200;
                res.status(statusCode).send({
                    length: users.length,
                    users
                });
            } else {
                statusCode = 204;
                res.status(statusCode).end();
            }
        })

    } catch (error: any) {
        statusCode = 500;
        res.status(statusCode).send({error: error.sqlMenssage || error.message});

    }
}