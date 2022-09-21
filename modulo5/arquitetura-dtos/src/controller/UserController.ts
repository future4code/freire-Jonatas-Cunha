import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserInputDTO } from "../models/User";


export class UserController {

    public async signup(req: Request, res: Response) {
        try {

            const { name, email, password } = req.body;
            const input: IUserInputDTO = { name, email, password };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.signup(input);
    
            res.status(200).send({message: "User created successfully", token});

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }


    public async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body;

            const userBusiness = new UserBusiness();
            const token = await userBusiness.login(email, password);
    
            res.status(200).send({message: "User logged in successfully", token});

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }

    public async getAllUsers(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string;
            const {search, page, order} = req.query as any;

            const userBusiness = new UserBusiness();
            const users = await userBusiness.getAllUsers(token, page, search, order);
    
            res.status(200).send({message: "List of users", users});

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string;
            const id = req.params.id;

            const userBusiness = new UserBusiness();
            await userBusiness.deleteUser(token, id);
    
            res.status(200).send({message: "User deleted successfully"});

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }

}