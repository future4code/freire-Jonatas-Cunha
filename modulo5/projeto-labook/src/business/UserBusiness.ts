import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

import { ILoginInputDTO, ISignUpInputDTO, Role, User } from "../models/User";
import EmailValidator from "../services/EmailValidator";
import MissingParameters from "../error/MissingParameters";
import BadRequest from "../error/BadRequest";
import Conflict from "../error/Conflict";
import Unauthorized from "../error/Unauthorized";
import NotFound from "../error/NotFound";

export class UserBusiness {

    constructor(
        private authenticator: Authenticator,
        private emailValidator: EmailValidator,
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private userDatabese: UserDatabase
    ) {};

    public signup = async (input: ISignUpInputDTO) => {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new MissingParameters("name, email and password");
        }

        if (name.length < 3) {
            throw new BadRequest("name must have at least 3 characters");
        }

        if (!this.emailValidator.validate(email)) {
            throw new BadRequest("Invalid email");
        }

        if (password.length < 6) {
            throw new BadRequest("password must have at least 6 characters");
        }

        const emailIsAlreadyInUse = await this.userDatabese.selectUserByEmail(email);

        if (emailIsAlreadyInUse.length) {
            throw new Conflict("Email already in use");
        }

        const id = this.idGenerator.generate();
        const hashPassword = await this.hashManager.hash(password);

        const newUser: User = new User(id, name, email, hashPassword, Role.NORMAL);
        await this.userDatabese.insertUser(newUser);

        const token = this.authenticator.generateToken({ id, role: newUser.getRole() });

        return token;

    }

    public login = async (input: ILoginInputDTO) => {
        const { email, password } = input;

        if (!email || !password) {
            throw new MissingParameters("email and password");
        }

        if(!this.emailValidator.validate(email)) {
            throw new BadRequest("Invalid email");
        }

        if(password.length < 6) {
            throw new BadRequest("password must have at least 6 characters");
        }

        const user = await this.userDatabese.selectUserByEmail(email);

        if (!user.length) {
            throw new NotFound("Email not registered");
        }

        const passwordIsCorrect = await this.hashManager.compare(password, user[0].password);

        if (!passwordIsCorrect) {
            throw new Unauthorized("Invalid password");
        }

        const token: string = this.authenticator.generateToken({ id: user[0].id, role: user[0].role });

        return token;
    }
   
}

