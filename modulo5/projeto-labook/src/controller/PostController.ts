import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { IPostDeleteInputDTO, IPostInputDTO } from "../models/Post";


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
            res.status(201).send({ message: "Post created successfully" })

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage })
        }
    }

    public getFeed = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            
            const feed = await this.postBusiness.getPosts(token)

            res.status(200).send(feed)

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage })
        }
    }

    public delete = async (req: Request, res: Response) => {
        try {
           const input: IPostDeleteInputDTO = {
                token: req.headers.authorization as string,
                id: req.params.id as string
           }

            await this.postBusiness.delete(input)
            res.status(200).send({ message: "Post deleted successfully" })

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage })
        }
    }


}
