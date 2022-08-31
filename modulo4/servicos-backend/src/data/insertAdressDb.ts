import { FullAddress } from '../types/typeFullAddress';
import { connection } from "./connection";
import { v4 as uuidv4 } from "uuid";

export default async function insertAdressDb(adress: FullAddress) {

    const id = uuidv4();
    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = adress;

    await connection("servicos_backend")
        .insert({
            id_user: id,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
        })
}