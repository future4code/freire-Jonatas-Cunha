import BaseError from "./BaseError";

class TokenError extends BaseError {
    constructor(message: string) {
        super(message, 401);
    }
}

export default TokenError;