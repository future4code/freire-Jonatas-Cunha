export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface IUserRegisterInputDTO {
    name: string,
    email: string,
    password: string,
}

export interface IUserLoginInputDTO {
    email: string,
    password: string,
}

export interface IGetAllUsersInputDTO {
    token: string,
    page: number,
    search: string,
    order: string
}

export interface IDelUserInputDTO {
    token: string,
    id: string
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
        private role: USER_ROLES
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
    public setRole = (newRole: USER_ROLES) => this.role = newRole


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