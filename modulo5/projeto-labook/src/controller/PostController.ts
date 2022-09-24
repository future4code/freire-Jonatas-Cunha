import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { IPostInputDTO } from "../models/Post";


export class PostController {

    constructor(
        private postBusiness: PostBusiness
    ) { }

    public create = async (req: Request, res: Response) => {

        try {
            const input: IPostInputDTO = {
                token: req.headers.authorization as string,
                content: req.body.content as string
            }

            await this.postBusiness.create(input)
            
        } catch (err) {
            res.status(err.statusCode || 400).send({ message: err.message || err.sqlMessage })
        }

    }

}
