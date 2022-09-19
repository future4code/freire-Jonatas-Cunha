class Follow {
    constructor(
        private id: string,
        private idFollower: string,
        private idFollowed: string
    ){};

    public getId(): string { return this.id };
    public getIdFollower(): string { return this.idFollower };
    public getIdFollowed(): string { return this.idFollowed };

    public static toFollowModel(data: any): Follow {
        return new Follow(data.id, data.idFollower, data.idFollowed);
    };
}

export default Follow;