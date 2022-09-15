import BaseError from "./BaseError";

class RecipeNotFound extends BaseError {
  constructor() {
    super("Recipe not found", 404);
  }
}

export default RecipeNotFound;