import { connection } from "./connection";
import { Purchase } from "../types/Purchase";
import { v4 as uuid } from "uuid";

export const insertPurchase = async (purchase: Purchase, totalPrice: number): Promise<void> => {
    await connection("labecommerce_purchases").insert({
        id: uuid(),
        user_id: purchase.userId,
        product_id: purchase.productId,
        quantity: purchase.quantity,
        total_price: totalPrice
    });
}