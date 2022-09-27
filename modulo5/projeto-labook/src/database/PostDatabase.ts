import { Post } from "../models/Post";
import BaseDataBase from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";

export class PostDatabase extends BaseDataBase {

    public static TABLE_POSTS: string = "labook_posts";

    public insert = async (post: Post): Promise<void> => {
        await BaseDataBase.getConnection()
            .insert({
                id: post.getId(),
                content: post.getContent(),
                user_id: post.getUserId()
            })
            .into(PostDatabase.TABLE_POSTS)
    }

    public selec = async (): Promise<any> => {
        const result = await BaseDataBase.getConnection()
            .select("labook_posts.id", "content", "user_id as userId", "name as userName")
            .from(PostDatabase.TABLE_POSTS)
            .join(UserDatabase.TABLE_USER, "labook_posts.user_id", "labook_users.id")
        return result
    }

    public delete = async (id: string): Promise<void> => {
        await BaseDataBase.getConnection()
            .delete()
            .from(PostDatabase.TABLE_POSTS)
            .where({ id })
    }

    public selectById = async (id: string): Promise<any> => {
        const result = await BaseDataBase.getConnection()
            .select("*")
            .from(PostDatabase.TABLE_POSTS)
            .where({ id })
        return result
    }

}