import connection from "./connection";

export default async function selectAllUsers() {
   const result = await connection("tdUsers").select("id", "nickname")

    return result;
       
}