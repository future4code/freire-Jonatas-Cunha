import BaseError from "./BaseError";

class NoRecipesFound extends BaseError {
  constructor() {
    super("No recipes found", 404);
  }
}

export default NoRecipesFound;