import { AddressInfo } from "net";
import app from "./app";
import { getAddress } from "./endpoints/getAddress";
import { getAllAddress } from "./endpoints/getAllAdress";
import { insertAdress } from "./endpoints/insertAdress";

app.get("/endereco/:cep", getAddress)
app.post("/user", insertAdress)
app.get("/list", getAllAddress)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});