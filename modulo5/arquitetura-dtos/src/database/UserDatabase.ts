import { User } from "../models/User"
import BaseDatabase from "./BaseDatabase"

class UserDatabase extends BaseDatabase {

    public static TABLE_USERS = "Arq_Users"

    public async insertUser(user: User): Promise<void> {
        await BaseDatabase.getConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
            .into(UserDatabase.TABLE_USERS)
    }

    public async selectUserByEmail(email: string): Promise<any> {
        const result = await BaseDatabase.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            .where({ email })

        return result
    }

    public async selectUserById(id: string): Promise<any> {
        const result = await BaseDatabase.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            .where({ id })

        return result
    }

    public async selectAllUsers(search: string, order: string): Promise<any> {
        const result = await BaseDatabase.getConnection()
            .select("id", "name", "email")
            .from(UserDatabase.TABLE_USERS)
            .where("name", "LIKE", `%${search}%`)
            .orderBy("name", order)

        return result
    }


    public async selectAllUsersByPage(search: string, order: string, page: number, limit: number, offset: number): Promise<any> {
        const result = await BaseDatabase.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            .where("name", "LIKE", `%${search}%`)
            .orderBy("name", order)
            .limit(limit)
            .offset(offset)

        return result
    }

    public async deleteUser(id: string): Promise<void> {
        await BaseDatabase.getConnection()
            .delete()
            .from(UserDatabase.TABLE_USERS)
            .where({ id })
    }

}

export default UserDatabase;