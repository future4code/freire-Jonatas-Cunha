import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserLoginInputDTO, IUserSignupInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input: IUserSignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.signup(input)

            res.status(200).send({token})
        } catch (error) {
            res.status(error.statusCode || 500).send({ error: error.message || error.sqlMessage })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: IUserLoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.login(input)

            res.status(200).send({token})
        } catch (error) {
            res.status(error.statusCode || 500).send({ error: error.message || error.sqlMessage })
        }
    }

}