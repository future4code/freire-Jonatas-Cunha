import { baseURL } from './baseURL'
import axios from 'axios'
import { User } from './types'

// 5

const getAllUsers = async (): Promise<User[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data.map((user: any) => ({
        id: user.id,
        email: user.email,
        name: user.name,
    }))
}


const sendNotification = (users: User[], message: string): void => {
   const usersList = users.map((user: User) => {
        return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message,
        })
    })

    Promise.all(usersList)
}

const main = async () => {
    try {
        const users = await getAllUsers()
       sendNotification(users, 'Hello World -- from TypeScript -- Promise.all -- 1')
    } catch (erro: any) {
        console.log(erro.response.data || erro.message)
    }
}

main()