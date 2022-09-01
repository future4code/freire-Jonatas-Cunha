import { connection } from "./connection";
import { UserData } from "../types/User";

export const selectAllUsers = async (): Promise<UserData[]> => {

    const result = await connection('labecommerce_users')
        .select("id", "name", "email")

    return result.map((user: any): UserData => {
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })

};
