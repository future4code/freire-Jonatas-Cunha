import axios from "axios"
import { Request, Response } from "express"
import { Address } from "../types/typeAddress";
import { getFullAddress } from "../services/getFullAddress";
export const getAddress = async (req: Request, res: Response) => {
    let cep = req.params.cep;
    let statusCode = 200;

    try {

        cep = cep.replace(/\D/g, '');
        if (cep.length !== 8) {
            statusCode = 400;
            throw new Error("CEP inválido");
        }

        const response: Address | undefined = await getFullAddress(cep);

        if (!response) {
            statusCode = 404;
            throw new Error("CEP não encontrado")
        }

        res.status(200).send(response);
    } catch (error: any) {
        res.status(statusCode).send({ error: error.message });
    }
}