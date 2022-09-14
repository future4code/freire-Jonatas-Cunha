import { Request, Response } from 'express';
import selectWhereNickname from '../data/selectWhereNickname';

export default async function getSearchUser(req: Request, res: Response) {
    const query = req.query.query as string;
    let statusCode = 500;

    try {

        const result = await selectWhereNickname(query);
        console.log(result.length);

        if (result.length > 0) {
            statusCode = 200;
            res.status(statusCode).send({length: result.length, users: result});
        } else {
            statusCode = 404;
            res.status(statusCode).send({message: "Nehum resultado corresponde ao termo pesquisado."}).end();
        }

    } catch (error: any) {
        statusCode = 500;
        res.status(statusCode).send({error: error.sqlMenssage || error.message});

    }
}