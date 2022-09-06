// 1
// A) O construtor serve para inicializar os atributos da classe. Para chamá-lo, basta instanciar a classe.
// B) 1
// C) Craindo metodos get e set para os atributos privados da classe.

export type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getName = (): string => this.name;
  
  }

export const user: UserAccount = new UserAccount("123.456.789-10", "Astrodev", 30);