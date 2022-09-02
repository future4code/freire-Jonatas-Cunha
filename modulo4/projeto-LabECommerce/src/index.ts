import app from "./app";
import { postUser } from "./endpoints/postUser";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProduct } from "./endpoints/postProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { postPurchase } from "./endpoints/postPurchase";
import { getPurchasesByUserId } from "./endpoints/getPurchasesByUserId";


app.get("/users", getAllUsers)
app.post("/users", postUser);

app.get("/products", getAllProducts)
app.post("/products", postProduct);

app.get("/users/:user_id/purchases", getPurchasesByUserId);
app.post("/purchases", postPurchase)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});