import BaseError from "./BaseError";

export default class Unauthorized extends BaseError {
    constructor(message: string) {
        super(message, 401);
    }
}