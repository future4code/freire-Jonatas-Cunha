import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function selecAllAdress() {

    const result = await connection("servicos_backend")
    .select(
        "id_user as id",
        "cep",
        "logradouro",
        "numero",
        "complemento",
        "bairro",
        "cidade",
        "estado"
    );
    return result;

}