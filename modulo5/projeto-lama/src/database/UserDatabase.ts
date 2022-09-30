import { IUserDB } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"

    public insertUser = async (input: IUserDB): Promise<void> => {
        await UserDatabase.connection
            .insert(input)
            .into(UserDatabase.TABLE_USERS)
    }

    public selectUserByEmail = async (email: string): Promise<any> => {
        const result = await UserDatabase.connection
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            .where({ email })

        return result
    }
}