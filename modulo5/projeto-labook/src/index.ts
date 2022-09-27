import app from "./controller/app"
import { userRouter } from './router/userRouter'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { postRouter } from './router/postRouter'
import { likeRouter } from './router/LikeRouter'

app.get('/', (req, res) => res.send("API rodando!"))

app.use("/users", userRouter)
app.use('/posts', postRouter)
app.use('/likes', likeRouter)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
