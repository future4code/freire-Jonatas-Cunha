import { UserDatabase } from "../database/UserDatabase"
import BadRequest from "../errors/BadRequest"
import MissingParameters from "../errors/MissingParameters"
import { IUserDB, IUserLoginInputDTO, IUserSignupInputDTO, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { EmailValidator } from "../services/EmailValidator"
import Conflict from "../errors/Conflict"
import Unauthorized from "../errors/Unauthorized"
import NotFound from "../errors/NotFound"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private emailValidator: EmailValidator
    ) {}


    public signup = async (input: IUserSignupInputDTO): Promise<string | void> => {
        const { name, email, password } = input

        if (!name || !email || !password) {
            throw new MissingParameters("name, email and password")
        }

        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            throw new BadRequest("name, email and password must be strings")
        }

        if(name.length < 3) {
            throw new BadRequest("name must have at least 3 characters")
        }

        if(!this.emailValidator.validate(email)) {
            throw new BadRequest("Invalid email")
        }

        if(password.length < 6) {
            throw new BadRequest("password must have at least 6 characters")
        }

        const userData = await this.userDatabase.selectUserByEmail(email)

        if(userData.length) {
            throw new Conflict("Email already registered")
        }
        
        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(password)
        const role = USER_ROLES.NORMAL

        const newUser: IUserDB = {
            id,
            name,
            email,
            password: hashPassword,
            role
        }

       await this.userDatabase.insertUser(newUser)

        const token = this.authenticator.generateToken({ id, role })

        return token
    }

    public login = async (input: IUserLoginInputDTO): Promise<string | void> => {
        const { email, password } = input

        if (!email || !password) {
            throw new MissingParameters("email and password")
        }

        if(typeof email !== "string" || typeof password !== "string") {
            throw new BadRequest("email and password must be strings")
        }

        if(!this.emailValidator.validate(email)) {
            throw new BadRequest("Invalid email")
        }

        if(password.length < 6) {
            throw new BadRequest("password must have at least 6 characters")
        }

        const userData = await this.userDatabase.selectUserByEmail(email)

        if(!userData.length) {
            throw new NotFound("email not registered")
        }

        const hashCompare = await this.hashManager.compare(password, userData[0].password)

        if(!hashCompare) {
            throw new Unauthorized("Invalid password")
        }

        const token = this.authenticator.generateToken({ id: userData[0].id, role: userData[0].role })

        return token

    }

}