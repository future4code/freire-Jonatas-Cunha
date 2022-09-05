// export type Transaction = {
//     description: string,
//     value: number,
//     date: string
// }

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    };

    public getDescription(): string {
        return this.description;
    };

    public getValue(): number {
        return this.value;
    };

    public getDate(): string {
        return this.date;
    };

}


export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf = (): string => this.cpf;
    public getName = (): string => this.name;
    public getAge = (): number => this.age;
    public getBalance = (): number => this.balance;
    public getTransactions = (): Transaction[] => this.transactions;

}