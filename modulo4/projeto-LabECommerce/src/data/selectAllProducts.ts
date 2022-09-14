import { connection } from "./connection";
import { ProductWithId } from "../types/Product";

export const selectAllProducts = async (order: string, search: string): Promise<ProductWithId[] | undefined> => {

    const result = await connection("labecommerce_products")
        .select("*")
        .where("name", "LIKE", `%${search}%`)
        .orderBy("price", order)

    if (result.length === 0) {
        return undefined;
    }

    return result.map((product: any) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product. image_url
        }
    })
}