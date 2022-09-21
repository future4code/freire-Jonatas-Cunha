import UserDatabase from "../database/UserDatabase";
import BadRequest from "../error/BadRequest";
import Conflict from "../error/Conflict";
import MissingParameters from "../error/MissingParameters";
import NotFound from "../error/NotFound";
import Unauthorized from "../error/Unauthorized";
import { IUserInputDTO, PublicUser, User, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {

    public async deleteUser(token: string, id: string): Promise<void> {
            
            const authenticator = new Authenticator();
            const authenticationData = authenticator.getTokenPayload(token);
    
            if (!authenticationData) {
                throw new Unauthorized("Invalid token");
            }
    
            if (authenticationData.role !== USER_ROLES.ADMIN) {
                throw new Unauthorized("You must be an admin to access this feature");
            }

            if (authenticationData.id === id) {
                throw new BadRequest("You cannot delete your own account");
            }
    
            const userDatabase = new UserDatabase();
            const user = await userDatabase.selectUserById(id);
    
            if (!user.length) {
                throw new NotFound("User not found");
            }
    
            await userDatabase.deleteUser(id);
    }

    public async signup(input: IUserInputDTO): Promise<string> {

        if (!input.name || !input.email || !input.password) {
            throw new MissingParameters("name, email and password");
        }

        if (input.name.length < 3) {
            throw new BadRequest("Invalid name. It must be at least 3 characters long");
        }

        if (input.password.length < 6) {
            throw new BadRequest("Invalid password. It must be at least 6 characters long");
        }

        if (!input.email.includes("@")) {
            throw new BadRequest("Invalid email");
        }

        const userDatabase = new UserDatabase();
        const emailAlreadyExists = await userDatabase.selectUserByEmail(input.email);

        if (emailAlreadyExists.length) {
            throw new Conflict("Email");
        }

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(input.password);

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const user = new User(id, input.name, input.email, hashPassword, USER_ROLES.NORMAL);

        const autheticator = new Authenticator();
        const token = autheticator.generateToken({ id: user.getId(), role: user.getRole() });

        await userDatabase.insertUser(user);

        return token;

    }

    public async login(email: string, password: string): Promise<string> {

        if (!email || !password) {
            throw new MissingParameters("email and password");
        }

        if (!email.includes("@")) {
            throw new BadRequest("Invalid email");
        }

        if (password.length < 6) {
            throw new BadRequest("Invalid password. It must be at least 6 characters long");
        }

        const userDatabase = new UserDatabase();
        const user = await userDatabase.selectUserByEmail(email);

        if (!user.length) {
            throw new NotFound("User not found!");
        }

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(password, user[0].password);

        if (!hashCompare) {
            throw new BadRequest("Invalid password");
        }

        const autheticator = new Authenticator();
        const token = autheticator.generateToken({ id: user[0].id, role: user[0].role });

        return token;

    }

    public async getAllUsers(token: string, page: number, search: string, order: string): Promise<PublicUser[]> {

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getTokenPayload(token);

        if (!authenticationData) {
            throw new Unauthorized("Invalid token");
        }

        const userDatabase = new UserDatabase();
        const account = await userDatabase.selectUserById(authenticationData.id);

        if (!account.length) {
            throw new Unauthorized("Account not found");
        }

        search = search || "";

        if (order !== "ASC" && order !== "DESC") {
            order = "ASC";
        }

        if (!page) {
            const users = await userDatabase.selectAllUsers(search, order);

            if (!users.length) {
                throw new NotFound("No users found");
            }

            const result: PublicUser[] = users.map((user: any): PublicUser => {
                return new PublicUser(user.id, user.name, user.email);

            });

            return result;

        }

        const limit = 2;
        isNaN(Number(page)) ? page = 1 : page = page;
        const offset = limit * (page - 1);
        const users = await userDatabase.selectAllUsersByPage(search, order, page, limit, offset);

        if (!users.length) {
            throw new NotFound("No users found");
        }


        const result: PublicUser[] = users.map((user: any): PublicUser => {
            return new PublicUser(user.id, user.name, user.email);

        });

        return result;

    }
}

