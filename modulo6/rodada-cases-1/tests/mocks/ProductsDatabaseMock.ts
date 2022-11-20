import { BaseDatabase } from "../../src/database/BaseDatabase"
import { Product } from "../../src/models/Products"

export const createProductMock =
{
    products: [
        {
            id: 1,
            name: "Product 1",
            tags: ["tag1", "tag2"]
        },
        {
            id: 2,
            name: "Product 2",
            tags: ["tag1", "tag2"]
        }
    ]
}


export const Products = [
    {
        id: 1,
        name: "Product 1",
        tags: "tag1,tag2,tag3"
    },
    {
        id: 2,
        name: "Product 2",
        tags: "tag1,tag2,tag3"
    },
    {
        id: 3,
        name: "Product 3",
        tags: "tag1,tag2,mock"
    }
]

export class ProductsDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "products_amaral"

    public async createProduct(product: Product): Promise<void> { }


    public async getProductByNameAndTags(name: string, tag: string): Promise<any> {
        if (name === "Product 3" && tag === "mock") {
            return Products[2]
        }

        if (name === "Product 1") {
            return Products[0]
        }

        if (name === "" && tag === "") {
            return Products
        }

        if (name === "empty") {
            return []
        }
    }


    public async getProductById(id: number): Promise<any> {
        if (id === 1) {
            return [Products[0]]
        }

        if (id === 2) {
            return []
        }
    }

}