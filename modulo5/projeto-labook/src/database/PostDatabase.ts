import { Post } from "../models/Post";
import BaseDataBase from "./BaseDatabase";

export class PostDatabase extends BaseDataBase {

    public static TABLE_POSTS = "labook_posts";

    public insertPost = async (post: Post) => {
        await BaseDataBase.getConnection()
            .insert({
                id: post.getId(),
                content: post.getContent(),
                user_id: post.getUserId()
            })
            .into(PostDatabase.TABLE_POSTS)
    }



}