import User from "../models/User";
import BaseDataBase from "./BaseDataBase";


class UserData extends BaseDataBase {

    public async insertUser(user: User): Promise<void> {
        await BaseDataBase.getConnection().into("cookenu_user")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            });
    }

    public async selectUserByEmail(email: string): Promise<User> {
       const user = await BaseDataBase.getConnection().into("cookenu_user")
            .select("*")
            .where({ email });

            return user[0] && User.toUserModel(user[0]);
    };


    public async selectUserById(id: string): Promise<User> {
        const user = await BaseDataBase.getConnection().into("cookenu_user")
            .select("*")
            .where({ id });

            return user[0] && User.toUserModel(user[0]);
    }
}

export default UserData;