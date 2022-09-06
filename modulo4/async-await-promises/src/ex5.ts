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


const sendNotification = async (users: User[], message: string): Promise<void> => {
   users.forEach((user: User) => {
        axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message,
        })
    })
}

const main = async () => {
    try {
        const users = await getAllUsers()
        await sendNotification(users, 'Hello World -- from TypeScript -- 3')
    } catch (erro: any) {
        console.log(erro.response.data || erro.message)
    }
}

main()