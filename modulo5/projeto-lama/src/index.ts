import app from './controller/app'

import { showRouter } from './router/showRouter'
import { userRouter } from './router/userRouter'

app.use("/users", userRouter)
app.use("/shows", showRouter)