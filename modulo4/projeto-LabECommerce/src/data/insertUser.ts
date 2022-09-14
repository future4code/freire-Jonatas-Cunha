import { connection } from "./connection";
import { User } from "../types/User";
import { v4 as uuid } from "uuid";

export const insertUser = async (user: User): Promise<void> => {
    await connection("labecommerce_users").insert({
        id: uuid(),
        name: user.name,
        email: user.email,
        password: user.password,
    });
}

