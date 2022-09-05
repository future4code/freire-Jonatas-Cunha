import { UserAccount } from "./exercicio2";

class Bank {
    private accounts: UserAccount[];

    constructor() {
        this.accounts = [];
    }

    public createAccount = (userAccount: UserAccount): void => {
        this.accounts.push(userAccount);
    };

    public getAllAccounts = (): UserAccount[] => {
        return this.accounts;
    };

    public getAccountByCpf = (cpf: string): UserAccount | undefined => {
        const account = this.accounts.find((account) => {
            return account.getCpf() === cpf;
        });

        return account;
    };

    public deleteAccount = (cpf: string): void => {
        const accountIndex = this.accounts.findIndex((account) => {
            return account.getCpf() === cpf;
        });

        this.accounts.splice(accountIndex, 1);
    };

    public updateAccount = (userAccount: UserAccount): void => {
        const accountIndex = this.accounts.findIndex((account) => {
            return account.getCpf() === userAccount.getCpf();
        });

        this.accounts[accountIndex] = userAccount;
    };
}