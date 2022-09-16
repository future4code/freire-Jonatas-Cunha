import { Request, Response } from 'express';
import MissingParameters from '../error/MissingParameters';
import Authenticator from '../services/Authenticator';
import GenerateId from '../services/GenerateId';
import Recipe from '../models/Recipe';
import RecipeData from '../data/RecipeData';
import RecipeNotFound from '../error/RecipeNotFound';
import { UserRoles } from '../types/AuthenticatorData';
import Unauthorized from '../error/Unauthorized';
import moment from 'moment';


class RecipeController {

    public async putRecipe(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const id = req.params.id as string;
            let { title, description, premaretionMode } = req.body;

            if (!token || !id ) {
                throw new MissingParameters("authorization and id");
            };

            const authenticator = new Authenticator();
            const account = authenticator.getData(token);

            const recipeData = new RecipeData();
            const recipe = await recipeData.selectRecipeById(id);

            console.log(recipe);

            if (!recipe) {
                throw new RecipeNotFound();
            }

            if (recipe.getUserId() !== account.id && account.role !== UserRoles.ADMIN) {
                throw new Unauthorized("You don't have permission to edit this recipe");
            }

            title = title ? title : recipe.getTitle();
            description = description ? description : recipe.getDescription();
            premaretionMode = premaretionMode ? premaretionMode : recipe.getPremaretionMode();

            const editRecipe = new Recipe(id, title, description, premaretionMode, recipe.getCreationDate(), recipe.getUserId());

            await recipeData.updateRecipe(editRecipe);
            res.status(200).send({ message: "Recipe updated successfully", editRecipe });

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage })
                : res.status(error.statusCode || 400).send({ message: error.message });
        }
    }


    public async deleteRecipe(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const id = req.params.id as string;

            if (!token || !id) {
                throw new MissingParameters("authorization and id");
            };

            const authenticator = new Authenticator();
            const account = authenticator.getData(token);

            const recipeData = new RecipeData();
            const recipe = await recipeData.selectRecipeById(id);

            if (!recipe) {
                throw new RecipeNotFound();
            }

            if (recipe.getUserId() !== account.id && account.role !== UserRoles.ADMIN) {
                throw new Unauthorized("You don't have permission to delete this recipe");
            }


            await recipeData.deleteRecipe(id);
            res.status(200).send({ message: "Recipe deleted successfully" });


        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage })
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }


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

            res.status(200).send({ message: "Recipe created successfully" });

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