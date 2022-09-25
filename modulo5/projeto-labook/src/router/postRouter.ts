import { Router } from 'express'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { PostDatabase } from '../database/PostDatabase'
import { PostController } from '../controller/PostController'
import { PostBusiness } from '../business/PostBusiness'
import { UserDatabase } from '../database/UserDatabase'


export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new Authenticator(),
        new IdGenerator(),
        new PostDatabase(),
        new UserDatabase
    )
)

postRouter.get('/', postController.getFeed)
postRouter.post('/create', postController.create)
postRouter.delete('/delete/:id', postController.delete)
