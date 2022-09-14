import BaseError from "./BaseError";

class InvalidEmail extends BaseError {
    constructor() {
        super(`Invalid email.`, 422);
    }
}

export default InvalidEmail;