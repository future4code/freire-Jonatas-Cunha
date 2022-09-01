import { connection } from "./connection";
import { ProductWithId } from "../types/Product";

export const getProductById = async (id: string): Promise<ProductWithId> => {
    let result = await connection("labecommerce_products")
        .select("*")
        .where({ id });

        result = result.map((product: any) => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl
            }
        });
        
        return result[0];
}