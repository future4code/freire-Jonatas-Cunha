import axios from "axios"
import { baseURL } from "./baseURL"
import { User } from "./types"


// 1
// A /subscribers

// B romise<any[]>

// C
async function getAllUsers (): Promise<User[]> {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data
}


const main = async () => {
    try {
        const users = await getAllUsers()
        console.log(users)
    } catch (erro: any) {
        console.log(erro.response.data || erro.message)
    }
}

main()