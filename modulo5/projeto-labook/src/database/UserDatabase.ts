import BaseDatabase from "./BaseDatabase"
import { User } from "../models/User"

export class UserDatabase extends BaseDatabase {

    public static TABLE_USER: string = "labook_users"

    public insertUser = async (user: User) => {
        await BaseDatabase.getConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            }).into(UserDatabase.TABLE_USER)
    }


    public selectUserByEmail = async (email: string): Promise<any> => {
        const result = await BaseDatabase.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_USER)
            .where({ email })

        return result
    }

    public selectUserById = async (id: string): Promise<any> => {
        const result = await BaseDatabase.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_USER)
            .where({ id })

        return result
    }

}
