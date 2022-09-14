import BaseError from "./BaseError";

class UserNotFound extends BaseError {
  constructor() {
    super("User not found", 404);
  }
}

export default UserNotFound;