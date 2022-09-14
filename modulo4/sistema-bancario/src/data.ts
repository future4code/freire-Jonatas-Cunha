export type User = {
    id: number,
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    extract: Extract[]
}

export type Extract = {
    id: number,
    value: number,
    date: string,
    description: string,
}

export const users : User[] = [
    {
        id: 1,
        name: 'João Gabriel',
        cpf: 12345678901,
        birthDate: '01/10/1995',
        balance: 250,
        extract: [
            {
                id: 1,
                value: 250,
                date: '01/03/2022',
                description: 'Depósito de dinheiro'
            },
        ]
    },
    {
        id: 2,
        name: 'Maria da Silva',
        cpf: 12345678902,
        birthDate: '04/01/1993',
        balance: 120,
        extract: [
            {
                id: 1,
                value: 120,
                date: '01/04/2022',
                description: 'Depósito de dinheiro'
            },
        ]
    },
    {
        id: 3,
        name: 'Pedro Pereira',
        cpf: 12345678903,
        birthDate: '23/06/1998',
        balance: 38,
        extract: [
            {
                id: 1,
                value: 38,
                date: '01/05/2022',
                description: 'Depósito de dinheiro'
            }
        ]
    }
]