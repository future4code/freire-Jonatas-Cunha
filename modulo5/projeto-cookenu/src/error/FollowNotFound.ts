import BaseError from "./BaseError";

class FollowNotFound extends BaseError {
    constructor(message: string) {
        super(message, 404);
    }
}

export default FollowNotFound;