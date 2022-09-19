import BaseError from "./BaseError";

class Conflict extends BaseError {
    constructor(message: string) {
        super(`${message} already exists.`, 409);
    }
}

export default Conflict;