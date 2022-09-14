import connection from "./connection";

export default async function selectTaskUserResponsible (id: string): Promise<any> {

    const result =  await connection("tdTaskUsers")
        .where({ task_id: id })
        .join("tdUsers", "tdTaskUsers.responsible_user_id", "tdUsers.id")
        .select("tdUsers.id", "tdUsers.nickname");

    return result;
}