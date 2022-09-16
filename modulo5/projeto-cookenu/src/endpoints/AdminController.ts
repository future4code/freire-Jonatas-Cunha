import BaseDataBase from "../data/BaseDataBase";
import { Request, Response } from "express";
import UserData from "../data/UserData";
import MissingParameters from "../error/MissingParameters";
import UserNotFound from "../error/UserNotFound";
import Authenticator from "../services/Authenticator";
import { UserRoles } from "../types/AuthenticatorData";
import Unauthorized from "../error/Unauthorized";

class AdminController extends BaseDataBase {

    public async deleteUser(req: Request, res: Response) {
        try {
            const token =  req.headers.authorization as string;;
            const id = req.params.id as string;

            if (!token || !id) {
                throw new MissingParameters("authorization and id");
            };

            const authenticator = new Authenticator();
            const account = authenticator.getData(token);

            if (account.role !== UserRoles.ADMIN) {
                throw new Unauthorized("Only admins can access this feature");
            }

            const userData = new UserData();
            const user = await userData.selectUserById(id);

            if (!user) {
                throw new UserNotFound();
            }

            await userData.deleteAccount(id);

            res.status(200).send({ message: "User deleted successfully" });

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }
}


export default AdminController;