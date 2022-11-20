export interface IInputProduct {
    products: IProduct[];
}


export interface IProduct {
    id: number;
    name: string;
    tags: string[];
}


export class Product {
    constructor(
        public id: number,
        public name: string,
        public tags: string
    ) {}


    public static ToProductModel(product: IProduct): Product {
        return new Product(product.id, product.name, product.tags.toLocaleString());
    }
}
