import moment from "moment"

class Recipes {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private premaretionMode: string,
        private creationDate: string | Date,
        private userId: string,
        private userName?: string
    ) { };


    public getId(): string { return this.id };
    public getTitle(): string { return this.title };
    public getDescription(): string { return this.description };
    public getPremaretionMode(): string { return this.premaretionMode };
    public getCreationDate(): string | Date { return this.creationDate };
    public getUserId(): string { return this.userId };
    public getUserName(): string | undefined { return this.userName };

    public static toRecipesModel(data: any): Recipes {
        return new Recipes(
            data.id, 
            data.title, 
            data.description, 
            data.preparation_mode, 
            moment(data.creationDate).format("DD/MM/YYYY"),
            data.user_id,
            data.name ? data.name : undefined
        );
    };
}

export default Recipes;
