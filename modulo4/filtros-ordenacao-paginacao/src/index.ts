import getUserByName from "./endpoints/getUserByName"
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import getAllUsersWithPagination from "./endpoints/getAllUsersWithPagination"
import getUserByType from "./endpoints/getUserByType"
import getUsersWithFilters from "./endpoints/getUsersWithFilters"
import getAllUsersOrdered from "./endpoints/getAllUsersOrdered"

export const app = express()

app.use(express.json())
app.use(cors())


app.get("/users/pagination", getAllUsersWithPagination)
app.get("/users/ordered", getAllUsersOrdered)
app.get("/users/:type", getUserByType)
app.get("/users", getUserByName)
app.get("/users/:type/filters", getUsersWithFilters)



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})