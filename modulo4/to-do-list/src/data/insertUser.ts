import connection from "./connection";
import { v4 as uuidv4 } from "uuid";

export default async function insertUser(
    name: string,
    nickname: string,
    email: string
) {
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