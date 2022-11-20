import { Router } from 'express'
import { ProductsBusiness } from '../business/ProductsBusiness'
import { ProductsController } from '../controller/ProductsController'
import { ProductsDatabase } from '../database/ProductsDatabase'


export const productsRouter = Router()

const productsController = new ProductsController(
    new ProductsBusiness(
        new ProductsDatabase()
    )
)


productsRouter.post('/', productsController.PostProduct)
productsRouter.get('/', productsController.GetProduct)
productsRouter.get('/:id', productsController.GetProductById)