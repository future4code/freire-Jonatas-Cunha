import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../types/AuthenticatorData";
import TokenError from "../error/TokenError";
import dotenv from 'dotenv'

dotenv.config()

class Authenticator {
    public generateToken(payload: AuthenticatorData): string {
        const token = jwt.sign({ payload }, process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string}
        );
        return token;
    }

    public getData(token: string): AuthenticatorData {
        try {
            const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as any;
            return tokenData.payload;
        } catch (error) {
            throw new TokenError(error.message);
        }
    }
}

export default Authenticator;