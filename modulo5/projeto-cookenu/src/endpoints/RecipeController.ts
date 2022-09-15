import { Request, Response } from 'express';
import MissingParameters from '../error/MissingParameters';
import Authenticator from '../services/Authenticator';
import GenerateId from '../services/GenerateId';
import Recipe from '../models/Recipe';
import RecipeData from '../data/RecipeData';
import RecipeNotFound from '../error/RecipeNotFound';

class RecipeController {

    public async postRecipe(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string;
            const { title, description, premaretionMode } = req.body;

            if (!title || !description || !premaretionMode || !token) {
                throw new MissingParameters("title, description, premaretionMode and token");
            }

            const authenticator = new Authenticator();
            const authenticatorData = authenticator.getData(token);

            const generateId = new GenerateId();
            const id = generateId.generate();

            const recipe = new Recipe(id, title, description, premaretionMode, new Date(), authenticatorData.id);

            const recipeData = new RecipeData();
            await recipeData.insertRecipe(recipe);
            
            res.status(200).send({message: "Recipe created successfully"});

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }

    public async getRecipeById(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const id = req.params.id as string;

            if (!token || !id) {
                throw new MissingParameters("authorization and id");
            };

            const authenticator = new Authenticator();
            authenticator.getData(token);

            const recipeData = new RecipeData();
            const recipe = await recipeData.selectRecipeById(id);

            if (!recipe) {
                throw new RecipeNotFound();
            }

            res.status(200).send(recipe);

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }

}

export default RecipeController;