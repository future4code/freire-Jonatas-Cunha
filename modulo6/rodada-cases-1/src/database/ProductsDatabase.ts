import { Product } from "../models/Products"
import { BaseDatabase } from "./BaseDatabase"

export class ProductsDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "products_amaral"

    public async createProduct(product: Product): Promise<void> {
        await BaseDatabase.connection
            .insert({
                id: product.id,
                name: product.name,
                tags: product.tags
            })
            .into(ProductsDatabase.TABLE_PRODUCTS)
    }

    public async getProductByNameAndTags(name: string, tags: string): Promise<any> {
        const result = await BaseDatabase.connection
            .select("*")
            .from(ProductsDatabase.TABLE_PRODUCTS)
            .where("name", "LIKE", `%${name}%`)
            .andWhere("tags", "LIKE", `%${tags}%`)

        return result
    }

    public async getProductById(id: number): Promise<any> {
        const result = await BaseDatabase.connection
            .select("*")
            .from(ProductsDatabase.TABLE_PRODUCTS)
            .where({ id })

        return result
    }

}