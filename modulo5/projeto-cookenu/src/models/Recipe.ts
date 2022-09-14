class Recipes {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private premaretionMode: string,
        private creationDate: Date,
        private userId: string,
    ) { };


    public getId(): string { return this.id };
    public getTitle(): string { return this.title };
    public getDescription(): string { return this.description };
    public getPremaretionMode(): string { return this.premaretionMode };
    public getCreationDate(): Date { return this.creationDate };
    public getUserId(): string { return this.userId };

    public static toRecipesModel(data: any): Recipes {
        return new Recipes(
            data.id, 
            data.title, 
            data.description, 
            data.premaretionMode, 
            data.creationDate, 
            data.userId
        );
    };
}

export default Recipes;