import { connection } from "./connection";
import { ProductWithId } from "../types/Product";

export const selectAllProducts = async (): Promise<ProductWithId[]> => {
    const result = await connection("labecommerce_products")
        .select("*");

    return result.map((product: any) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product. image_url
        }
    })
}