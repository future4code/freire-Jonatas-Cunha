export interface ILikeVerifyDTO {
    user_id: string;
    post_id: string;
}

export interface ILikeInputDTO {
    token: string;
    postId: string;
}

export interface ILikeDatabaseDTO {
    id: string;
    user_id: string;
    post_id: string;
}

export interface IUnlikeDatabaseDTO {
    user_id: string;
    post_id: string;
}

export interface IGetLikesOutputDTO {
    postId: string;
    count: number;
    userIsLiked: boolean;
}