export type Purchase = {
    userId: string,
    productId: string,
    quantity: number
}

export type PurchaseAllInfo = {
    id: string,
    productId: string,
    productName: string,
    productPrice: number,
    imageUrl: string,
    quantity: number,
    totalPrice: number
}