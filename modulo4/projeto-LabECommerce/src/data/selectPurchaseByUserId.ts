import { connection } from "./connection";
import { PurchaseAllInfo } from "../types/Purchase";

export const selectPurchaseByUserId = async (id: string): Promise<PurchaseAllInfo[] | undefined> => {
    const result = await connection("labecommerce_purchases")
        .select(
            "labecommerce_purchases.id",
            "labecommerce_purchases.product_id as productId",
            "labecommerce_products.name as productName",
            "labecommerce_purchases.quantity",
            "labecommerce_products.price as productPrice",
            "labecommerce_products.image_url as imageUrl",
            "labecommerce_purchases.quantity",
            "labecommerce_purchases.total_price as totalPrice"
        )
        .join("labecommerce_products", "labecommerce_purchases.product_id", "=", "labecommerce_products.id")
        .where({ user_id: id })

    if (result.length === 0) {
        return undefined;
    }

    const purchases: PurchaseAllInfo[] = result.map((purchase: PurchaseAllInfo): PurchaseAllInfo => {
        return {
            id: purchase.id,
            productId: purchase.productId,
            productName: purchase.productName,
            productPrice: purchase.productPrice,
            imageUrl: purchase.imageUrl,
            quantity: purchase.quantity,
            totalPrice: purchase.totalPrice
        }
    })

    return purchases

};