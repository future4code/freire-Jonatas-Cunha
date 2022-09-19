import BaseError from "./BaseError";

class EmailNotRegistered extends BaseError {
  constructor() {
    super("Email not registered", 404);
  }
}

export default EmailNotRegistered;