import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../model/types";
import TokenError from "../error/TokenError";
import dotenv from 'dotenv'
import { UserRoles } from "../model/types";
import UserData from "../data/UserData";


dotenv.config()

class Authenticator {
    public generateToken(id: string, role: UserRoles): string { // ID DO USUÁRIO
        const token = jwt.sign(
            { payload: {id, role} },
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_EXPIRES_IN as string}
        )

        return token;
    }

    public tokenData(token: string): AuthenticatorData | null {
        try {
            const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as any;
            console.log(tokenData.payload)
            return tokenData.payload;
        } catch (error: any) {
            throw new TokenError(error.message);
        }
    }

}

export default Authenticator;