import { Router } from 'express'
import { ShowBusiness } from '../business/ShowBusiness'
import { ShowController } from '../controller/ShowController'
import { ShowDatabase } from '../database/ShowDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const showRouter = Router()

const showController = new ShowController(
    new ShowBusiness(
        new ShowDatabase(),
        new IdGenerator(),
        new Authenticator()
    )

)

showRouter.get('/', showController.getShows)
showRouter.post('/create', showController.createShow)
showRouter.post('/buyTicket', showController.buyTicket)
showRouter.delete('/cancelBuyTicket', showController.cancelBuyTicket)

