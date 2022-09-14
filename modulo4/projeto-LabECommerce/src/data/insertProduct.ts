import { connection } from "./connection";
import { Product } from "../types/Product";
import { v4 as uuid } from "uuid";

export const insertProduct = async (product: Product): Promise<void> => {
    await connection("labecommerce_products").insert({
        id: uuid(),
        name: product.name,
        price: product.price.toFixed(2),
        image_url: product.imageUrl
    })
}