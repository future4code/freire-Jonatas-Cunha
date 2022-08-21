import express from 'express';
import cors from 'cors';
import moment from 'moment';
import { Extract, User, users } from './data';

const port = process.env.PORT || 3003;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {

    try {
    if (users.length > 0) {
        res.status(200).send(users)
    } else {
        res.status(204).send()
    }} catch (error) {
        res.status(500).send({ error: 'Erro ao buscar usuários' })
    }
});

// EXTRATO
app.get('/users/balance', (req, res) => {
    let { name, cpf } = req.body
    let STATUS_CODE: number = 500

    try {

        if (!name || !cpf) {
            STATUS_CODE = 400
            throw new Error('Todos os dados são obrigatórios')
        }

        cpf = cpf.replace(/[^\d]/g, '')

        if (isNaN(Number(cpf))) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        if (cpf.length !== 11) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        const user: User | undefined = users.find(user => user.cpf === Number(cpf) && user.name === name)

        if (!user) {
            STATUS_CODE = 404
            throw new Error('Usuário não encontrado')
        }

        STATUS_CODE = 200
        res.status(STATUS_CODE).send({
            name: user.name,
            balance: user.balance
        })



    } catch (error: any) {
        res.status(STATUS_CODE).send({
            message: error.message || 'Erro inesperado'
        })
    }
});

// CRIAR USUÁRIO
app.post('/users', (req, res) => {

    let { name, cpf, birthDate } = req.body;
    let STATUS_CODE: number = 500

    try {

        if (!name || !cpf || !birthDate) {
            STATUS_CODE = 400
            throw new Error('Todos os dados são obrigatórios')
        }

        if (!isNaN(name)) {
            STATUS_CODE = 422
            throw new Error('Nome não pode ser um número')
        }

        cpf = cpf.replace(/[^\d]/g, '')

        if (isNaN(Number(cpf))) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        if (cpf.length !== 11) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        if (users.find(user => user.cpf === Number(cpf))) {
            STATUS_CODE = 409
            throw new Error('CPF já cadastrado')
        }


        if(!moment(birthDate, 'DD/MM/YYYY', true).isValid()) { // VALIDAÇÃO DE DATA BIBLIOTECA MOMENT
            STATUS_CODE = 422
            throw new Error('Data de nascimento inválida')
        }

        const informedBirth: string[] = birthDate.split('/')
        const newDateBirth: number = new Date(Number(informedBirth[2]), Number(informedBirth[1]) - 1, Number(informedBirth[0])).getTime()
        const currentDate: number = new Date().getTime()
        const age: number = Math.floor((currentDate - newDateBirth) / 1000 / 60 / 60 / 24 / 365)



        if (age < 18) {
            STATUS_CODE = 422
            throw new Error('Idade menor que 18 anos')
        }

        const newUser: User = {
            id: users.length + 1,
            name,
            cpf: Number(cpf),
            birthDate,
            balance: 0,
            extract: []
        }

        users.push(newUser)
        STATUS_CODE = 201
        res.status(STATUS_CODE).send({
            message: 'Usuário cadastrado com sucesso',
            user: newUser
        })




    } catch (error: any) {
        res.status(STATUS_CODE).send({
            message: error.message || 'Erro inesperado'
        })
    }

});

// TRANSFERIR SALDO
app.post('/users/transfer', (req, res) => {
    let { name, cpf, value, cpfDestination, nameDestination } = req.body
    let STATUS_CODE: number = 500

    try {

        if (!name || !cpf || !value || !cpfDestination || !nameDestination) {
            STATUS_CODE = 400
            throw new Error('Todos os dados são obrigatórios')
        }

        cpf = cpf.replace(/[^\d]/g, '')
        cpfDestination = cpfDestination.replace(/[^\d]/g, '')

        // VALIDAÇÃO CPF DO REMETENTE

        if (isNaN(Number(cpf))) {
            STATUS_CODE = 422
            throw new Error('CPF do remetente é inválido')
        }

        if (cpf.length !== 11) {
            STATUS_CODE = 422
            throw new Error('CPF do remetente é inválido')
        }

        const user: User | undefined = users.find(user => user.cpf === Number(cpf) && user.name === name)

        if (!user) {
            STATUS_CODE = 404
            throw new Error('Remetente não encontrado')
        }

        /// VALIDAÇÃO CPF DO DESTINATÁRIO

        if (isNaN(Number(cpfDestination))) {
            STATUS_CODE = 422
            throw new Error('CPF do destinatário é inválido')
        }

        if (cpfDestination.length !== 11) {
            STATUS_CODE = 422
            throw new Error('CPF do destinatário é inválido')
        }

        const userDestination: User | undefined = users.find(user => user.cpf === Number(cpfDestination) && user.name === nameDestination)

        if (!userDestination) {
            STATUS_CODE = 404
            throw new Error('Destinatário não encontrado')
        }


        // VALIDAÇÃO VALOR

        value = value.replace(",", ".")

        if (isNaN(Number(value))) {
            STATUS_CODE = 422
            throw new Error('Valor inválido')
        }

        if (value < 0) {
            STATUS_CODE = 422
            throw new Error('Valor inválido')
        }
        if (value > user.balance) {
            STATUS_CODE = 422
            throw new Error('Saldo insuficiente')
        }


        // TRANSFERÊNCIA
        const oldBalance: number = user.balance
        const newBalance: number = oldBalance - Number(value)

        user.balance -= Number(value)
        userDestination.balance += Number(value)
        const date: string = new Date().toLocaleDateString()
        user.extract.push({
            id: user.extract.length + 1,
            description: 'Transferência para ' + userDestination.name,
            date,
            value: Number(value)
        } as Extract)
        userDestination.extract.push({
            id: userDestination.extract.length + 1,
            description: 'Transferência de ' + user.name,
            date,
            value: Number(value)
        } as Extract)

        STATUS_CODE = 200
        res.status(STATUS_CODE).send({
            message: 'Transferência realizada com sucesso',
            oldBalance,
            newBalance,
        })

    } catch (error: any) {
        res.status(STATUS_CODE).send({
            message: error.message || 'Erro inesperado'
        })
    }
});

// ADICIONAR SALDO
app.put('/users/balance', (req, res) => {
    let { name, cpf, value } = req.body
    let STATUS_CODE: number = 500

    try {

        if (!name || !cpf || !value) {
            STATUS_CODE = 400
            throw new Error('Todos os dados são obrigatórios')
        }

        cpf = cpf.replace(/[^\d]/g, '')

        if (isNaN(Number(cpf))) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        if (cpf.length !== 11) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        const user: User | undefined = users.find(user => user.cpf === Number(cpf) && user.name === name)

        if (!user) {
            STATUS_CODE = 404
            throw new Error('Usuário não encontrado')
        }

        if (isNaN(value)) {
            value = value.replace(",", ".")
        }

        if (isNaN(Number(value))) {
            STATUS_CODE = 422
            throw new Error('Valor inválido')
        }

        if (value < 0) {
            STATUS_CODE = 422
            throw new Error('Valor inválido')
        }



        const balance: number = user.balance
        user.balance += Number(value)
        user.extract.push({
            id: user.extract.length + 1,
            value: Number(value),
            date: new Date().toLocaleDateString(),
            description: "Depósito de dinheiro"
        })
        STATUS_CODE = 200
        res.status(STATUS_CODE).send({
            name: user.name,
            message: 'Saldo adicionado com sucesso',
            oldBalance: balance,
            newBalance: +user.balance
        })
    } catch (error: any) {
        res.status(STATUS_CODE).send({
            message: error.message || 'Erro inesperado'
        })
    }
});

// PAGAR CONTAS
app.put('/users/extract', (req, res) => {
    let { name, cpf, value, data, description } = req.body
    let STATUS_CODE: number = 500

    try {

        if (!name || !cpf || !value || !description) {
            STATUS_CODE = 400
            throw new Error('Todos os dados são obrigatórios')
        }

        cpf = cpf.replace(/[^\d]/g, '')

        if (isNaN(Number(cpf))) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        if (cpf.length !== 11) {
            STATUS_CODE = 422
            throw new Error('CPF inválido')
        }

        const user: User | undefined = users.find(user => user.cpf === Number(cpf) && user.name === name)

        if (!user) {
            STATUS_CODE = 404
            throw new Error('Usuário não encontrado')
        }

        if (value < 0) {
            STATUS_CODE = 422
            throw new Error('Valor inválido')
        }

        if (value > user.balance) {
            STATUS_CODE = 422
            throw new Error('Saldo insuficiente')
        }

        if (data) {
            if(!moment(data, 'DD/MM/YYYY', true).isValid()) { // VALIDAÇÃO DE DATA BIBLIOTECA MOMENT
                STATUS_CODE = 422
                throw new Error('Data inválida')
            }


            let newDate = new Date(data.split('/').reverse().join('/'))
            if (newDate < new Date()) {
                STATUS_CODE = 422
                throw new Error('Data inválida')
            }
        }

        const newDate = data ? data : new Date().toLocaleDateString().split('/').join('/')


        const balance: number = user.balance
        user.balance -= Number(value)
        const newExtract: Extract = {
            id: user.extract.length + 1,
            value: Number(value),
            date: newDate,
            description: 'Pagamento de conta'
        }
        user.extract.push(newExtract)
        STATUS_CODE = 200
        res.status(STATUS_CODE).send({
            name: user.name,
            onldBalance: balance,
            newBalance: user.balance,
            extract: newExtract
        })
    } catch (error: any) {
        res.status(STATUS_CODE).send({
            message: error.message || 'Erro inesperado'
        })
    }
});

// RODAR SERVIDOR
app.listen(port, () => {
    console.log(`RODANDO NA PORTA ${port}`);
});