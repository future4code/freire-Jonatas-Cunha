import { connection } from "./connection";
import { UserData } from "../types/User";
import { selectPurchaseByUserId } from "./selectPurchaseByUserId";
import { PurchaseAllInfo } from "../types/Purchase";

export const selectAllUsers = async (): Promise<UserData[] | undefined> => {

    let result = await connection('labecommerce_users')
        .select("id", "name", "email")
        
    if (result.length === 0) {
        return undefined;
    }

    result = result.map(async (user: UserData): Promise<UserData> => {
        const purchases: PurchaseAllInfo[] | undefined = await selectPurchaseByUserId(user.id)
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            purchases: purchases ? purchases : []
        }
    })

    return Promise.all(result)
};
