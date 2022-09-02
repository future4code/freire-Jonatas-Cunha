import { Request, Response } from "express";
import { Purchase } from "../types/Purchase";
import { validate as uuidValidate, version as uuidVersion, v4 as uuid } from "uuid";
import { selectProductById } from "../data/selectProductById";
import { selectUserById } from "../data/selectUserById";
import { insertPurchase } from "../data/insertPurchase";
import { ProductWithId } from "../types/Product";


export const postPurchase = async (req: Request, res: Response): Promise<void> => {
    let { userId, productId, quantity }: Purchase = req.body as Purchase;
    let statusCode: number = 500;
    try {
        if (!userId || !productId || !quantity) {
            statusCode = 422;
            throw new Error("userId, productId and quantity are required");
        }

        if (!(uuidValidate(userId) && uuidVersion(userId) === 4)) {
            statusCode = 400;
            throw new Error("userId must be a valid uuid");
        }

        if (!(uuidValidate(productId) && uuidVersion(productId) === 4)) {
            statusCode = 400;
            throw new Error("productId must be a valid uuid");
        }

        quantity = Number(quantity)
        if (isNaN(quantity) || !Number.isInteger(quantity) || quantity <= 0) {
            statusCode = 400;
            throw new Error("the quantity must be an integer and greater than 0");
        }

        const user = await selectUserById(userId);
        if (!user) {
            statusCode = 404;
            throw new Error("User not found");
        }

        const product: ProductWithId | undefined = await selectProductById(productId);

        if (!product) {
            statusCode = 404;
            throw new Error("Product not found");
        }


        let totalPrice: number = product.price * quantity;
        
        await insertPurchase({ userId, productId, quantity,}, totalPrice);


        statusCode = 201;
        res.status(statusCode).send({ message: "Purchase created successfully" });


    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }
};