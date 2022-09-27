import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { UserBusiness } from '../business/UserBusiness'
import { Authenticator } from '../services/Authenticator'
import EmailValidator from '../services/EmailValidator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { UserDatabase } from '../database/UserDatabase'

export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new Authenticator(),
        new EmailValidator(),
        new HashManager(),
        new IdGenerator(),
        new UserDatabase()
    )
)

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
