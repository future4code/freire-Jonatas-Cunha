import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { PostDatabase } from "../database/PostDatabase";
import { IPostDeleteInputDTO, IPostInputDTO, Post, PublicPost } from "../models/Post";
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

        if(content.length < 1) {
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
        await this.postDatabase.insert(newPost)

    }

    public getPosts = async (token: string) => {

        if(!token){
            throw new MissingParameters("token")
        }

        const tokenData = this.authenticator.getTokenPayload(token)

        if(!tokenData){
            throw new Unauthorized("Invalid token")
        }

        const user = await this.userDatabase.selectUserById(tokenData.id)

        if(!user.length){
            throw new Unauthorized("User not found")
        }

        const response = await this.postDatabase.selec()

        const publicFeed: PublicPost[] = response.map((post: any) => {
            return PublicPost.toPublicPostModel(post)
        })

        return publicFeed
    }

    public delete = async (input: IPostDeleteInputDTO) => {
        const { token, id } = input

        if(!token || !id){
            throw new MissingParameters("token and id")
        }

        const tokenData = this.authenticator.getTokenPayload(token)

        if(!tokenData){
            throw new Unauthorized("Invalid token")
        }

        const user = await this.userDatabase.selectUserById(tokenData.id)

        if(!user.length){
            throw new Unauthorized("User not found")
        }

        const post = await this.postDatabase.selectById(id)

        if(!post.length){
            throw new BadRequest("Post not found")
        }

        if(post[0].user_id !== tokenData.id && tokenData.role !== "ADMIN"){
            throw new Unauthorized("You can only delete your own posts")
        }

        await this.postDatabase.delete(id)
    }

}