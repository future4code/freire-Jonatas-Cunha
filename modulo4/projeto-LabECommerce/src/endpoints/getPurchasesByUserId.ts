import { Request, Response } from "express";
import { PurchaseAllInfo } from "../types/Purchase";
import { selectPurchaseByUserId } from "../data/selectPurchaseByUserId";
import { validate as uuidValidate, version as uuidVersion} from "uuid";
import {selectUserById } from "../data/selectUserById";

export const getPurchasesByUserId = async (req: Request, res: Response): Promise<void> => {

    const userId: string = req.params.user_id;
    let statusCode: number = 500;
    
    try {


        if (!(uuidValidate(userId) && uuidVersion(userId) === 4)) {
            statusCode = 400;
            throw new Error("userId must be a valid uuid");
        }

        const user = await selectUserById(userId);
        if (!user) {
            statusCode = 404;
            throw new Error("User not found");
        }

        const purchases: PurchaseAllInfo[] = await selectPurchaseByUserId(userId)

        if (!purchases) {
            res.statusCode = 404
            throw new Error("No purchases found")
        }

        statusCode = 200;
        res.status(statusCode).send(purchases)

    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }
};