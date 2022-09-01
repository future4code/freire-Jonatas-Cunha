import { Request, Response } from "express";
import { Product } from "../types/Product";
import { insertProduct } from "../data/insertProduct";

export const postProduct = async (req: Request, res: Response) => {

    let { name, price, imageUrl }: Product = req.body as Product;
    let statusCode: number = 500;


    try {

        if (!name || !price || !imageUrl) {
            res.statusCode = 422;
            throw new Error("name, price and imageUrl are required");
        }

        if(name.length < 3) {
            res.statusCode = 400;
            throw new Error("name must have at least 3 characters");
        }

        if(isNaN(Number(price))) {
            res.statusCode = 400;
            throw new Error("price must be a number");
        }

        if(price <= 0) {
            res.statusCode = 400;
            throw new Error("price must be greater than 0");
        }

        if(!imageUrl.includes("http") || !imageUrl.includes(".")) {
            res.statusCode = 400;
            throw new Error("imageUrl must be a valid url");
        }

        await insertProduct({ name, price, imageUrl });

        statusCode = 201;
        res.status(statusCode).send({ message: "Product created successfully" });

    } catch (error: any) {
        error.sqlMessage ? res.status(500).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }
};