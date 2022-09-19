import { UserRoles } from "../types/AuthenticatorData";

class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: UserRoles
    ){};

    public getId(): string { return this.id };
    public getName(): string { return this.name };
    public getEmail(): string { return this.email };
    public getPassword(): string { return this.password };
    public getRole(): UserRoles { return this.role };

    public static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password, data.role);
    };
};

export default User;

export interface UserProfile {
    id: string,
    name: string,
    email: string,
}