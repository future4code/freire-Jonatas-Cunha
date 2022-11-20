import app from './controller/app'

import { productsRouter } from './router/ProductsRouter'

app.use("/products", productsRouter)