import { Request, Response } from "express";
import { LikeBusiness } from "../business/LikeBusiness";
import { IGetLikesOutputDTO, ILikeInputDTO } from "../models/Like";



export class LikeController {

    constructor(
        private likeBusiness: LikeBusiness
    ) {}

    public likePost = async (req: Request, res: Response) => {
        try {

           const input: ILikeInputDTO = {
                token: req.headers.authorization as string,
                postId: req.params.postId
           }

             const result = await this.likeBusiness.likePost(input);

            res.status(200).send({ message: "Post liked successfully", likes: result, userIsLiked: true });
        } catch (err) {
            res.status(err.statusCode || 500).send({message: err.message || err.sqlMessage});
        }
    };

    public unlikePost = async (req: Request, res: Response) => {
        try {
            
            const input: ILikeInputDTO = {
                token: req.headers.authorization as string,
                postId: req.params.postId
            }

            const result = await this.likeBusiness.unlikePost(input);
            res.status(200).send({message: "Post unliked successfully", likes: result, userIsLiked: false});

        } catch (err) {
            res.status(err.statusCode || 500).send({message: err.message || err.sqlMessage});
        }
    };

    public getPostLikes = async (req: Request, res: Response) => {
        try {
            const input: ILikeInputDTO = {
                token: req.headers.authorization as string,
                postId: req.params.postId
            };

            const result: IGetLikesOutputDTO = await this.likeBusiness.getLikes(input);
            res.status(200).send(result);

        } catch (err) {
            res.status(err.statusCode || 500).send({message: err.message || err.sqlMessage});
        }
    };

}