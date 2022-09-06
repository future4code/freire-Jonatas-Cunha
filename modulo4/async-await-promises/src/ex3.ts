import {baseURL} from './baseURL'
import axios from 'axios'

// 3 

type User = {
  id: string,
  email: string,
  name: string,
}

// A - Não pois a função esta retornando um array de objetos do typo User.

// B - Sim, pois temos certeza que a função esta retornando um array de objetos do typo User.

const getAllUsers = async (): Promise<User[]> => {
  const result = await axios.get(`${baseURL}/subscribers`)
  return result.data.map((user: any) => ({
    id: user.id,
    email: user.email,
    name: user.name,
  }))
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