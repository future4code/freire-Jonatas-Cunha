import BaseError from "./BaseError";

class SmallPassword extends BaseError {
    constructor() {
        super(`Password must be at least 6 characters.`, 422);
    }
}

export default SmallPassword;