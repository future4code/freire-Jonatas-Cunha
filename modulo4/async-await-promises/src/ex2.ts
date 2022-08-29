import axios from "axios"
import { baseURL } from "./baseURL"
import { User } from "./types"


// 2

// A - é que a arrow function não tem o this.


// B
const getAllUsers = async (): Promise<User[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data
}
