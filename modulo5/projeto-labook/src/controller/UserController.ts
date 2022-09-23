import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignUpInputDTO } from "../models/User";


export class UserController {

    constructor( private userBusiness: UserBusiness ) { };

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignUpInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }

            const token = await this.userBusiness.signup(input);
            res.status(200).send({ token });
            
        }  catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage });
        }
    };

    public login = async (req: Request, res: Response) => {
        try {
            
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password,
            }

            const token: string = await this.userBusiness.login(input);
            res.status(200).send({ token });


        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage });
        }
            

    }

   
}