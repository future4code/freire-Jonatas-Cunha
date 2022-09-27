export enum Role{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export interface ISignUpInputDTO {
    name: string,
    email: string,
    password: string,
}

export interface ILoginInputDTO {
    email: string,
    password: string,
}

export class User {
    static selectUserByEmail(email: string) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: Role
    ) {};

    public getId = () => this.id;
    public getName = () => this.name;
    public getEmail = () => this.email;
    public getPassword = () => this.password;
    public getRole = () => this.role;


    public setId = (newId: string) => this.id = newId
    public setName = (newName: string) => this.name = newName
    public setEmail = (newEmail: string) => this.email = newEmail
    public setPassword = (newPassword: string) => this.password = newPassword
    public setRole = (newRole: Role) => this.role = newRole

    public static toUserModel = (user: any): User => {
        return new User(user.id, user.name, user.email, user.password, user.role)
    };

}


export class PublicUser {
    constructor(
        private id: string,
        private name: string,
        private email: string,
    ) {};

    public getId = () => this.id;
    public getName = () => this.name;
    public getEmail = () => this.email;
}