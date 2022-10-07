import { ProductsDatabase } from "../database/ProductsDatabase"
import BadRequest from "../errors/BadRequest"
import NotFound from "../errors/NotFound"
import { IInputProduct, IProduct, Product } from "../models/Products"

export class ProductsBusiness {

    constructor(
        private productsDatabase: ProductsDatabase
    ) { }


    public PostProduct = async(products: IInputProduct): Promise<boolean> => {

       const productsList = products.products.map(async (product: IProduct) => {
            if(!product.name || !product.tags || !product.tags.length || !product.id) {
                throw new BadRequest(`Invalid product: ${JSON.stringify(product)}`);
            }
            const productModel = Product.ToProductModel(product);

            await this.productsDatabase.createProduct(productModel);

        })

        await Promise.all(productsList);

        return true

    }


    public GetProduct = async(name: string, tag: string): Promise<any> => {

        if(!name) {
            name = "";
        }

        if(!tag) {
            tag = "";
        }

        const result = await this.productsDatabase.getProductByNameAndTags(name, tag);

        if(!result.length) {
            throw new NotFound("Products not found");
        }

        const productsList = result.map((product: any) => {
            return {id: product.id, name: product.name, tags: product.tags.split(",")};
        })

        return productsList;


    }


    public GetProductById = async(id: number): Promise<any> => {
            
            const result = await this.productsDatabase.getProductById(id);
    
            if(!result.length) {
                throw new NotFound("Product not found");
            }
    
            const product = result[0];
    
            return {id: product.id, name: product.name, tags: product.tags.split(",")};
    }

}