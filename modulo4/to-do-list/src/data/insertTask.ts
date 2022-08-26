import connection from "./connection";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default async function insertTask(
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
) {
    await connection("tdTasks").insert({
        id: uuidv4(),
        title: title,
        description: description,
        status: "to_do",
        limit_date: moment(limitDate, "DD MM YYYY").format("YYYY-MM-DD"),
        creator_user_id: creatorUserId
    }).then(() => {
        return true;
    }).catch(() => {
        throw new Error('Erro ao inserir tarefa');
    })
}