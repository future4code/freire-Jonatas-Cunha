import connection from "./connection";

export default async function selectUserById (id: string) {

    const result = await connection("tdUsers").where("id", id).select("id", "nickname");

    if (result.length > 0) {
        return result[0];
    } else {
        return null;
    }

}