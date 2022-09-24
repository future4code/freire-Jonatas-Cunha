export interface IPostInputDTO {
    token: string;
    content: string;
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
    ) { }

    public getId = () => this.id;
    public getContent = () => this.content;
    public getUserId = () => this.userId;

    public setId = (id: string) => this.id = id;
    public setContent = (content: string) => this.content = content;
    public setUserId = (userId: string) => this.userId = userId;

    public static toPostModel = (post: any): Post => {
        return new Post(post.id, post.content, post.userId)
    }
}