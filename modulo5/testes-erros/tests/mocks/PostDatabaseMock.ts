import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ILikeDB, IPostDB, Post } from "../../src/models/Post"


export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    private postsDB: IPostDB[] = [
        {
            id: "201",
            content: "Olá, sou novo por aqui!",
            user_id: "101"
        },
        {
            id: "202",
            content: "Bom dia, família!",
            user_id: "102"
        },
        {
            id: "203",
            content: "Receba!",
            user_id: "103"
        },
        {
            id: "id-mock",
            content: "Teste do mock",
            user_id: "id-mock"
        }
    ]

    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post): Promise<void> => { }

    public getPosts = async (): Promise<IPostDB[]> => {

        return this.postsDB
    }

    public getLikes = async (postId: string): Promise<number> => {
        return postId === "201" ? 1 : 0
    }

    public findPostById = async (postId: string): Promise<IPostDB | undefined> => {

        switch (postId) {
            case "201":
                return {
                    id: "201",
                    content: "Olá, sou novo por aqui!",
                    user_id: "id-mock"
                }
            case "202":
                return {
                    id: "202",
                    content: "Bom dia, família!",
                    user_id: "id-mock"
                }
            case "203":
                return {
                    id: "203",
                    content: "Receba!",
                    user_id: "nao-autorizado"
                }

            default:
                return undefined
        }
    }

    public deletePost = async (postId: string): Promise<void> => {}

    public findLike = async (postId: string, userId: string): Promise<ILikeDB | undefined> => {

        if (postId == "201" && userId == "id-mock") {
            return {
                id: "301",
                post_id: "201",
                user_id: "id-mock"
            }
        }

        if(postId == "202" && userId == "id-mock") {
            return undefined
        }

        return undefined
    }

    public addLike = async (likeDB: ILikeDB): Promise<void> => {
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .insert(likeDB)
    }

    public removeLike = async (postId: string, userId: string): Promise<void> => {
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_LIKES)
        //     .delete()
        //     .where({ post_id: postId })
        //     .andWhere({ user_id: userId })
    }
}