import { Request, Response } from "express";
import { GenerateId } from "../services/GenerateId";
import UserData from "../data/UserData";
import { User } from "../model/types";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import { UserRoles } from "../model/types";

class UserController {

    public signup = async (req: Request, res: Response): Promise<void> => {

        try {
            const { email, password } = req.body;

            if (!email || !password) {
                throw new Error("Missing input");
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }

            if (password.length < 6) {
                throw new Error("Invalid password");
            }

            const generateId = new GenerateId();
            const id = generateId.generate();

            const hashPassword = new HashManager();
            const newPassword = await hashPassword.hash(password);

            const userData = new UserData();
            const user = new User(id, email, newPassword);
            await userData.create(user);

            const authenticator = new Authenticator();
            const token = authenticator.generateToken(id, UserRoles.USER);

            res.status(200).send({ token: token });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }

    }


    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                throw new Error("Missing input");
            }

            const userData = new UserData();
            const user = await userData.getByEmail(email);

            const hashPassword = new HashManager();
            const isComparePassword = await hashPassword.compare(password, user.password);

            if (!isComparePassword) {
                throw new Error("Invalid password");
            }

            const authenticator = new Authenticator();
            const token = authenticator.generateToken(user.id as string, user.role);

            res.status(200).send({ token: token });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    public profile = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string;

            const authenticator = new Authenticator();
            const authenticationData = authenticator.tokenData(token);

            if(authenticationData.role !== UserRoles.USER) {
                throw new Error("Unauthorized");
            }

            const userData = new UserData();
            const user = await userData.getBYId(authenticationData.id);

            res.status(200).send({ id: user.id, email: user.email });
        } catch (error) {
            res.status(400).send({ message: error.message });
        }

    }

}

export default UserController;