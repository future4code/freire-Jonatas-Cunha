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
        birthDate: '01/01/2000',
        balance: 250,
        extract: []
    },
    {
        id: 2,
        name: 'Maria da Silva',
        cpf: 12345678902,
        birthDate: '01/01/2000',
        balance: 120,
        extract: []
    },
    {
        id: 3,
        name: 'Pedro Pereira',
        cpf: 12345678903,
        birthDate: '01/01/2000',
        balance: 38,
        extract: []
    }
]