import { ILikeDatabaseDTO, ILikeVerifyDTO, IUnlikeDatabaseDTO } from "../models/Like";
import BaseDataBase from "./BaseDatabase";

export class LikeDataBase extends BaseDataBase {

    public static TABLE_LIKE: string = "labook_likes";

    public likePost = async (input: ILikeDatabaseDTO): Promise<void> => {
        await BaseDataBase.getConnection()
            .insert(input)
            .into(LikeDataBase.TABLE_LIKE);
    }

    public unlikePost = async (input: IUnlikeDatabaseDTO): Promise<void> => {
        await BaseDataBase.getConnection()
            .delete()
            .from(LikeDataBase.TABLE_LIKE)
            .where(input);
    }

    public selectLike = async (input: ILikeVerifyDTO): Promise<any> => {
       const result =  await BaseDataBase.getConnection()
            .select("*")
            .from(LikeDataBase.TABLE_LIKE)
            .where(input);

        return result;
    };

    public selectAllCountLikes = async (postId: string): Promise<any> => {
        const result = await BaseDataBase.getConnection()
            .count("* as count")
            .from(LikeDataBase.TABLE_LIKE)
            .where({ post_id: postId });
            
        return result;
    }

    public deleteAllLikes = async (postId: string): Promise<void> => {
        await BaseDataBase.getConnection()
            .delete()
            .from(LikeDataBase.TABLE_LIKE)
            .where({ post_id: postId });
    }

}