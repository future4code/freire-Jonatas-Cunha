export enum UserRoles {
    ADMIN = 'admin',
    USER = 'user',
}

export type AuthenticatorData = {
    id: string
    role: UserRoles
 }
 