import express from 'express';
import cors from 'cors';
import { STATUS_CODES } from 'http';


const app = express()
app.use(express.json())
app.use(cors())


// 1 
//// A) GET
//// B) /users

type User = {
    id: number,
    name: string,
    email: string,
    type: Role
    age: number
}

enum Role {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Role.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Role.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Role.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Role.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Role.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: Role.ADMIN,
        age: 60
    }
]

// A) COMO STRING
// B) ADICIONADO UMA CONDIÇÃO PARA VERIFICAR SE O USUÁRIO É ADMINISTRADOR OU NORMAL  = ADMIN | NORMAL


app.get('/users', (req, res) => {

    const name: string | undefined = req.query.name as string
    let STATUS_CODES: number = 500

    try {
        if (name) {
            const user = users.find(user => user.name.toLowerCase() === name.toLowerCase())
            if (!user) {
                STATUS_CODES = 404
                throw new Error('User not found')
            }
            STATUS_CODES = 200
            res.status(STATUS_CODES).send(user)
        } else {
            STATUS_CODES = 200
            res.status(STATUS_CODES).send(users)
        }
    } catch (error: any) {
        res.status(STATUS_CODES).send({ error: error.message })
    }
})

// A) QUERY PARAMS


app.put('/users', (req, res) => {
    const { name, email, type, age } = req.body
    let STATUS_CODES: number = 500

    try {
        if (!name || !email || !type || !age) {
            STATUS_CODES = 400
            throw new Error('Missing parameters')
        }

        const user = users.find(user => user.email === email)

        if (user) {
            STATUS_CODES = 400
            throw new Error('User already exists')
        }

        const newUser: User = {
            id: users.length + 1,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        STATUS_CODES = 201
        res.status(STATUS_CODES).send(newUser)

    } catch (error: any) {
        res.status(STATUS_CODES).send({ error: error.message })
    }


})

// A) O PUT FUNCIONA COMO O POST
// B) O PUT É MAIS USADO PARA ATUALIZAR UM REGISTRO NAO É PARA CRIAR UM NOVO REGISTRO





app.listen(3003, () => {
    console.log("RODANDO NA PORTA 3003")
})