import { Router } from 'express'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { PostDatabase } from '../database/PostDatabase'
import { UserDatabase } from '../database/UserDatabase'
import { LikeController } from '../controller/LikeController'
import { LikeBusiness } from '../business/LikeBusiness'
import { LikeDataBase } from '../database/LikeDatabase'


export const likeRouter = Router()

const likeController = new LikeController(
    new LikeBusiness(
        new LikeDataBase(),
        new UserDatabase(),
        new PostDatabase(),
        new Authenticator,
        new IdGenerator()

    )
)

likeRouter.get('/:postId', likeController.getPostLikes)
likeRouter.post('/newLike/:postId', likeController.likePost)
likeRouter.delete('/removeLike/:postId', likeController.unlikePost)

