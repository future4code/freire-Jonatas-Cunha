import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { PostDatabase } from "../database/PostDatabase";
import { IPostInputDTO, Post } from "../models/Post";
import MissingParameters from "../error/MissingParameters";
import BadRequest from "../error/BadRequest";
import { UserDatabase } from "../database/UserDatabase";
import Unauthorized from "../error/Unauthorized";

export class PostBusiness {
    constructor(
        private authenticator: Authenticator,
        private idGenerator: IdGenerator,
        private postDatabase: PostDatabase,
        private userDatabase: UserDatabase
    ) { }


    public create = async (input: IPostInputDTO) => {
        const { token, content } = input

        if(!token || !content){
           throw new MissingParameters("token and content")
        }

        if(content.length > 1) {
            throw new BadRequest("Content must be at least 1 character")
        }

        const tokenData = this.authenticator.getTokenPayload(token)

        if(!tokenData){
            throw new Unauthorized("Invalid token")
        }

        const user = await this.userDatabase.selectUserById(tokenData.id)

        if(!user.length){
            throw new Unauthorized("User not found")
        }

        const id = this.idGenerator.generate()
        const newPost: Post = new Post(id, content, tokenData.id)
        await this.postDatabase.insertPost(newPost)

    }
}