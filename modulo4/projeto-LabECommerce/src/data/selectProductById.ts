import { connection } from "./connection";
import { ProductWithId } from "../types/Product";

export const selectProductById = async (id: string): Promise<ProductWithId | undefined> => {
    let result = await connection("labecommerce_products")
        .select("*")
        .where({ id });

    if (result.length === 0) {
        return undefined;
    }

    return {
        id: result[0].id,
        name: result[0].name,
        price: result[0].price,
        imageUrl: result[0].imageUrl
    }
}