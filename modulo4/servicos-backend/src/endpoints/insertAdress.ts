import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb";
import { getFullAddress } from "../services/getFullAddress";


export const insertAdress = async (req: Request, res: Response) => {
   
    const cep = req.body.cep;
    const number = Number(req.body.number);
    const complement = req.body.complement;
    let statusCode = 500;

    try {
        if(!cep) {
            statusCode = 400;
            throw new Error("CEP não informado")
        }

        if(!number || isNaN(number) || !Number.isInteger(number)) {
            statusCode = 400;
            throw new Error("Número não informado ou inválido")
        }

        const adress = await getFullAddress(cep);
        if(!adress) {
            statusCode = 404;
            throw new Error("CEP não encontrado")
        }


        await insertAdressDb({
            cep,
            logradouro: adress.logradouro,
            numero: number,
            complemento: complement || "",
            bairro: adress.bairro,
            cidade: adress.cidade,
            estado: adress.estado}
        )

        res.status(200).send({message: "Endereço cadastrado com sucesso"});



    } catch (error: any) {
        res.status(statusCode).send({message: error.message || error.sqlMessage})
    }


}