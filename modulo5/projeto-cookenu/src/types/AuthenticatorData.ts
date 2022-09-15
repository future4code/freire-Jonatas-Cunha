export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
}

export interface AuthenticatorData {
    id: string
    role: UserRoles
 }
 