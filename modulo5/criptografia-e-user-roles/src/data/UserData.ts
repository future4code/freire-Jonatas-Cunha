import { User, UserType } from "../model/types";
import BaseDataBase from "./BaseDataBase";

class UserData extends BaseDataBase {
    create = async (user: User): Promise<void> => {
        await this.getConnection()
            .into("user_aut")
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                password: user.getPassword()
            })
    };

    getByEmail = async (email: string): Promise<UserType> => {

        const result = await this.getConnection()
            .into("user_aut")
            .select('*')
            .where({ email })

        if (!result.length) {
            throw new Error("User not found")
        }

        return result[0]

    }

    getBYId = async (id: string): Promise<UserType> => {
        const result = await this.getConnection()
            .into("user_aut")
            .select('*')
            .where({ id })

        if (!result.length) {
            throw new Error("User not found")
        }

        return result[0]

    }
}

export default UserData;