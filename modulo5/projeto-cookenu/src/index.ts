import app from "./app";
import { AddressInfo } from "net";
import UserController from "./endpoints/UserController";


app.get("/", (req, res) => res.status(200).send("Server is running"));


const userController = new UserController();
app.get("/user/profile", userController.personalProfile);
app.get("/user/:id", userController.anotherProfile);
app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});