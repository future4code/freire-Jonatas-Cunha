import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../model/types";
import TokenError from "../error/TokenError";
import dotenv from 'dotenv'

dotenv.config()

class Authenticator {
    public generateToken(id: AuthenticatorData): string { // ID DO USUÁRIO
        const token = jwt.sign(
            { payload: id },
            process.env.JWT_KEY as string,
            { expiresIn: "1min" }
        )

        return token;
    }

    public tokenData(token: string): string | null {
        console.log(token)
        try {
            const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as any;
            return tokenData.payload.id;
        } catch (error: any) {
            throw new TokenError(error.message);
        }
    }

}

export default Authenticator;