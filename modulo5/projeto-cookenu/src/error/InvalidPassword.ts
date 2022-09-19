import BaseError from "./BaseError";

class InvalidPassword extends BaseError {
    constructor() {
        super("Invalid password", 401);
    };
};

export default InvalidPassword;