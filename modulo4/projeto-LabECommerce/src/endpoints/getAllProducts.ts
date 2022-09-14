import { Request, Response } from "express";
import { selectAllProducts } from "../data/selectAllProducts";
import { ProductWithId } from "../types/Product";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {

    let order: string = req.query.order as string;
    let search: string = req.query.search as string;
    let statusCode: number = 500;

    try {

        if (order.toLowerCase() !== "asc" && order.toLowerCase() !== "desc") {
            order = "RANDOM()"
        }

        if (!search) {
            search = ""
        }

        const products: ProductWithId[] | undefined = await selectAllProducts(order, search);

        if (!products) {
            res.statusCode = 404;
            throw new Error("No products found");
        }

        statusCode = 200;
        res.status(statusCode).send(products);

    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }
}