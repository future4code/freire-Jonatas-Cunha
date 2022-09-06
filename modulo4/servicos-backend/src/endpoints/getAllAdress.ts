import axios from "axios"
import { Request, Response } from "express"
import selecAllAdress from "../data/selectAllAdress";
import { Address } from "../types/typeAddress";


export const getAllAddress = async (req: Request, res: Response) => {

    let statusCode = 500;

    try {

        const address = await selecAllAdress();
        if (address.length === 0) {
            statusCode = 404;
            throw new Error("Nenhum endereço cadastrado")
        }

        statusCode = 200;
        res.status(statusCode).send(address);

    } catch (error: any) {
        error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) :
            res.status(statusCode).send({error: error.message});
    }

}