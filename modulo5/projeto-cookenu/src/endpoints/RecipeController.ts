
import { Request, Response } from 'express';
import MissingParameters from '../error/MissingParameters';
import Authenticator from '../services/Authenticator';
import GenerateId from '../services/GenerateId';
import Recipe from '../models/Recipe';

class RecipeController {

    public async postRecipe(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string;
            const { title, description, premaretionMode } = req.body;

            const authenticator = new Authenticator();
            const authenticatorData = authenticator.getData(token);

            if (!title || !description || !premaretionMode) {
                throw new MissingParameters("title, description and premaretionMode");
            }

            const generateId = new GenerateId();
            const id = generateId.generate();

            const recipe = new Recipe(id, title, description, premaretionMode, new Date(), authenticatorData.id);
            
            res.status(200).send({message: "Recipe created successfully"});

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }
}