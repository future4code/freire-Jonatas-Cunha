import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { userRouter } from './router/userRouter'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get('/', (req, res) => res.send("API rodando!"))
app.use("/users", userRouter)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))