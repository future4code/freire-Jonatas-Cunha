import { Request, Response } from 'express';
import { User } from '../types/User';
import * as EmailValidator from 'email-validator';
import { insertUser } from '../data/insertUser';

export const postUser = async (req: Request, res: Response) => {

    const { name, email, password }: User = req.body as User;
    let statusCode: number = 500;

    try {

        if (!name || !email || !password) {
            statusCode = 422;
            throw new Error("name, email and password are required");
        }
        
        if (name.length < 3) {
            statusCode = 400;
            throw new Error("name must have at least 3 characters");
        }

        if (name.charAt(0) === " " ) {
            statusCode = 400;
            throw new Error("name must not start with a space");
        }

        if (!EmailValidator.validate(email)) {
            statusCode = 400;
            throw new Error("Invalid email");
        }

        if (password.length < 6) {
            statusCode = 400;
            throw new Error("password must have at least 6 characters");
        }

        await insertUser({ name, email, password });
        statusCode = 201;
        res.status(statusCode).send({ message: "User created successfully!" });
    }
    catch (error: any) { 
        error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
            : res.status(statusCode).send({ message: error.message });
    }
};