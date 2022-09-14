import connection from '../data/connection';

export default async function selectWhereNickname(query: string) {
    const result = await connection("tdUsers").select("id", "nickname")
        .where("nickname", "like", `%${query}%`);

    return result;
}