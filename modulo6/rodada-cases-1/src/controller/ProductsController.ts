import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { IInputProduct } from "../models/Products";

export class ProductsController {

    constructor(
        private productsBusiness: ProductsBusiness
    ) { }

    public PostProduct = async (req: Request, res: Response) => {
        try {
            const input: IInputProduct = {
                products: req.body.products
            }

            const result = await this.productsBusiness.PostProduct(input);
            res.status(200).send(result);
        } catch (error) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage });
        }
    }

    public GetProduct = async (req: Request, res: Response) => {
        try {
            const name = req.query.name as string;
            const tag = req.query.tag as string;

            const result = await this.productsBusiness.GetProduct(name, tag);
            res.status(200).send(result);
        } catch (error) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage });
        }
    }

    public GetProductById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            const result = await this.productsBusiness.GetProductById(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage });
        }
    }

}