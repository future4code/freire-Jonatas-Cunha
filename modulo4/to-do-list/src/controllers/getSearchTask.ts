import { Request, Response } from 'express';
import selectSearchTask from '../data/selectSearchTask';

export default async function getSearchTask(req: Request, res: Response) {
    const search = req.query.query as string;
    let statusCode = 500;
    try {
         await selectSearchTask(search).then(result => {
            statusCode = 200;
            res.status(statusCode).send(result);
        })
    }
    catch (error: any) {

        res.status(statusCode).send({message: error.message || error.sqlMessage});
    };
}