export class User {
    constructor (public id:string, private email:string, private password:string) {}
    public getId = () => this.id
    public getEmail = () => this.email
    public getPassword = () => this.password
}

export type AuthenticationData = {
    id: string
}

export type UserType = {
    id:string,
    email:string,
    password:string
}

export type AuthenticatorData = {
    id: string
 }
 