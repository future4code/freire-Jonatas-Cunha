import BaseError from "./BaseError"

class Confict extends BaseError {
    constructor(message: string) {
        super(`${message}`, 409)
    }
}

export default Confict