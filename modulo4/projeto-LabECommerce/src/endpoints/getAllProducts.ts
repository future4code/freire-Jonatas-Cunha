import { Request, Response } from "express";
import { selectAllProducts } from "../data/selectAllProducts";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {

    let statusCode: number = 500;

    try {
        const products = await selectAllProducts();

        if (!products.length) {
            res.statusCode = 404;
            throw new Error("No products found");
        }

        statusCode = 200;
        res.status(statusCode).send(products);

    } catch (error: any) {
        error.sqlMessage ? res.status(500).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }
}