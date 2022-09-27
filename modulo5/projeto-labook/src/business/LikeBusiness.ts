import { LikeDataBase } from "../database/LikeDatabase";
import { PostDatabase } from "../database/PostDatabase";
import { UserDatabase } from "../database/UserDatabase";
import Conflict from "../error/Conflict";
import MissingParameters from "../error/MissingParameters";
import NotFound from "../error/NotFound";
import Unauthorized from "../error/Unauthorized";
import { IGetLikesOutputDTO, ILikeDatabaseDTO, ILikeInputDTO } from "../models/Like";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class LikeBusiness {
    constructor(
        private likeDatabase: LikeDataBase,
        private userDatabase: UserDatabase,
        private postDatabase: PostDatabase,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ){};

    public likePost = async (input: ILikeInputDTO): Promise<string | void> => {
        const { token, postId } = input;

        if(!token || !postId) {
            throw new MissingParameters("token and postId")
        }

        const tokenData = this.authenticator.getTokenPayload(token);

        if(!tokenData){
            throw new Unauthorized("Invalid token");
        }

        const userId = tokenData.id;
        const userData = await this.userDatabase.selectUserById(userId);

        if(!userData.length){
            throw new Unauthorized("User not found");
        }

        const post = await this.postDatabase.selectById(postId);

        if(!post.length){
            throw new NotFound("Post not found");
        }

        const like = await this.likeDatabase.selectLike({ user_id: userId, post_id: postId });

        if(like.length) {
            throw new Conflict("Post already liked");
        }

        const id = this.idGenerator.generate();
        
        const likeData: ILikeDatabaseDTO = {id, user_id: userId, post_id: postId};

        await this.likeDatabase.likePost(likeData);

        const countLikes = await this.likeDatabase.selectAllCountLikes(postId);

        return countLikes[0].count;

    }

    public unlikePost = async (input: ILikeInputDTO): Promise<IGetLikesOutputDTO> => {
        const { token, postId } = input;

        if(!token || !postId) {
            throw new MissingParameters("token and postId")
        }

        const tokenData = this.authenticator.getTokenPayload(token);

        if(!tokenData){
            throw new Unauthorized("Invalid token");
        }

        const postData = await this.postDatabase.selectById(postId);

        if(!postData.length){
            throw new NotFound("Post not found");
        }

        const userId = tokenData.id;
        const userData = await this.userDatabase.selectUserById(userId);

        if(!userData.length){
            throw new Unauthorized("User not found");
        }

        const postIsLiked = await this.likeDatabase.selectLike({ user_id: userId, post_id: postId });

        if(!postIsLiked.length) {
            throw new Conflict("Post not liked");
        }

        await this.likeDatabase.unlikePost({ user_id: userId, post_id: postId });

        const countLikes = await this.likeDatabase.selectAllCountLikes(postId);

        return countLikes[0].count;
    }

    public getLikes = async (input: ILikeInputDTO): Promise<any> => {
        
        const { token, postId } = input;

        if(!token || !postId) {
            throw new MissingParameters("token and postId")
        }

        const tokenData = this.authenticator.getTokenPayload(token);

        if(!tokenData){
            throw new Unauthorized("Invalid token");
        }

        const userData = await this.userDatabase.selectUserById(tokenData.id);

        if(!userData.length){
            throw new Unauthorized("User not found");
        }

        const postData = await this.postDatabase.selectById(postId);

        if(!postData.length){
            throw new NotFound("Post not found");
        }

        const likes = await this.likeDatabase.selectAllCountLikes(postId);
        const userIsLiked = await this.likeDatabase.selectLike({ user_id: tokenData.id, post_id: postId });

        return { postId, likes: likes[0].count, userIsLiked: userIsLiked.length ? true : false };

    };

}