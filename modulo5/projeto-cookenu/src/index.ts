import app from "./app";
import { AddressInfo } from "net";
import UserController from "./endpoints/UserController";
import RecipeController from "./endpoints/RecipeController";
import FollowController from "./endpoints/FollowController";


app.get("/", (req, res) => res.status(200).send("Server is running"));


const userController = new UserController();
app.get("/user/profile", userController.personalProfile);
app.get("/user/:id", userController.anotherProfile);
app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);

const recipeController = new RecipeController();
app.get("/recipe/:id", recipeController.getRecipeById);
app.post("/recipe", recipeController.postRecipe);

const followController = new FollowController();
app.get("/user/followVerify/:id", followController.followVerify);
app.post("/user/follow/:id", followController.followUser);
app.delete("/user/unFollow/:id", followController.unfollowUser);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});