import connection from "./connection";

export default async function updateUsers (
    id: string,
    name: string | undefined,
    nickname: string | undefined,
    email: string | undefined
) {
    await connection("tdUsers").where("id", id).update({
        name: name,
        nickname: nickname,
        email: email
    }).then(() => {
        return true;
    }).catch((error) => {
        throw new Error(error.sqlMessage || "Erro ao atualizar usuário");
    }
    );
}