import { Request, Response } from "express";
import { UserBusiness } from '../business/UserBusiness'
import { IDelUserInputDTO, IGetAllUsersInputDTO, IUserLoginInputDTO, IUserRegisterInputDTO } from "../models/User";


export class UserController {

    constructor( private userBusiness: UserBusiness ) {};

    public signup = async (req: Request, res: Response) => {
        try {

            const input: IUserRegisterInputDTO = { 
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            const token = await this.userBusiness.signup(input);

            res.status(200).send({message: "User created successfully", token});

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }

    public login = async (req: Request, res: Response) => {
        try {

            const input: IUserLoginInputDTO = {
                email: req.body.email,
                password: req.body.password
             };

            const token = await this.userBusiness.login(input);

            res.status(200).send({message: "User logged in successfully", token});
        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        try {

            const input: IGetAllUsersInputDTO = {
                token: req.headers.authorization as string,
                search: req.query.search as string,
                page: Number(req.query.page),
                order: req.query.order as string
            };

            const users = await this.userBusiness.getAllUsers(input);
    
            res.status(200).send({message: "List of users", users});

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {

            const input: IDelUserInputDTO = {
                token:  req.headers.authorization as string,
                id: req.params.id as string
            };

            await this.userBusiness.deleteUser(input);
    
            res.status(200).send({message: "User deleted successfully"});

        } catch (err) {
            res.status(err.statusCode || 500).send({ message: err.message || err.sqlMessage });
        }
    }

}