import { UserData } from "../types/User";
import { connection } from "./connection";

export const selectUserById = async (id: string): Promise<UserData> => {
    let result = await connection("labecommerce_users")
        .select("id", "name", "email")
        .where({ id });

        result = result.map((user: any) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

        return result[0];
}