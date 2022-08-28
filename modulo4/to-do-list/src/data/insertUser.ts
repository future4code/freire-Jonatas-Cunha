import connection from "./connection";
import { v4 as uuidv4 } from "uuid";
import { User } from "../types";

export default async function insertUser(user: User): Promise<void> {

    const { name, nickname, email } = user;

    await connection("tdUsers").insert({
        id: uuidv4(),
        name: name,
        nickname: nickname,
        email: email

    }).then(() => {
        return true;
    }).catch((error) => {
        throw new Error(error.sqlMessage || "Erro ao inserir usuário");
    });
}