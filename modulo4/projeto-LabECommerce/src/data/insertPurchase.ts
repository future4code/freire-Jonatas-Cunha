import { connection } from "./connection";
import { Purchase } from "../types/Purchase";
import { v4 as uuid } from "uuid";

export const insertPurchase = async (purchase: Purchase): Promise<void> => {
    await connection("purchases")
        .insert({
            id: uuid(),
            user_id: purchase.userId,
            product_id: purchase.productId,
            quantity: purchase.quantity,
            // total_price: purchase.totalPrice
        });
}