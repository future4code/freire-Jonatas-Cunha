import Recipes from "../models/Recipe";
import BaseDataBase from "./BaseDataBase";

class RecipeData extends BaseDataBase {

    public async updateRecipe(recipe: Recipes): Promise<void> {
        await BaseDataBase.getConnection().into("cookenu_recipes")
            .update({
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                preparation_mode: recipe.getPremaretionMode(),
            })
            .where({ id: recipe.getId() });
    }


    public async deleteRecipe(id: string): Promise<void> {
        await BaseDataBase.getConnection().into("cookenu_recipes")
            .delete()
            .where({ id });
    }

    public async selectRecipeByCreatorId(id: string): Promise<Recipes[]> {
        const result = await BaseDataBase.getConnection().select(
            "cookenu_recipes.id",
            "cookenu_recipes.title",
            "cookenu_recipes.description",
            "cookenu_recipes.preparation_mode",
            "cookenu_recipes.creation_date",
            "cookenu_recipes.user_id",
            "cookenu_user.name"
        )
            .from("cookenu_recipes")
            .where("cookenu_recipes.user_id", id)
            .join("cookenu_user", "cookenu_user.id", "=", "cookenu_recipes.user_id")

        return result[0] && result.map((recipe: any) =>  Recipes.toRecipesModel(recipe));
    }

    public async insertRecipe(recipe: Recipes): Promise<void> {
        await BaseDataBase.getConnection().into("cookenu_recipes")
            .insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                preparation_mode: recipe.getPremaretionMode(),
                creation_date: recipe.getCreationDate(),
                user_id: recipe.getUserId()
            });
    }

    public async selectRecipeById(id: string): Promise<Recipes> {
        const result = await BaseDataBase.getConnection().select(
            "cookenu_recipes.id",
            "cookenu_recipes.title",
            "cookenu_recipes.description",
            "cookenu_recipes.preparation_mode",
            "cookenu_recipes.creation_date",
            "cookenu_recipes.user_id",
            "cookenu_user.name"
        )
            .from("cookenu_recipes")
            .where("cookenu_recipes.id", id)
            .join("cookenu_user", "cookenu_user.id", "=", "cookenu_recipes.user_id")

        return result[0] && Recipes.toRecipesModel(result[0]);
    }

}

export default RecipeData;