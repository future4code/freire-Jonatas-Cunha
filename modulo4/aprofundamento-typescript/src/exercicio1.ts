// 1

//// A) NÃO ACEITA, POIS O TIPO DE DADO É STRING E NÃO É POSSÍVEL ATRIBUIR UM NUMERO
let minhaString: string = "Hello World";
// minhaString = 1

//// B) PODEMOS USAR O | COMO SE FOSSE UM OR OU UM ANY
let meuNumero: number = 1;
let maisDeUmTipo: string | number = "Hello World";
let maisDeUmTipo2: any = 1;

//// C)
type Pessoa = {
    nome: string;
    idade: number;
    corFavorita: string;
}

let pessoa: Pessoa = {
    nome: "João",
    idade: 20,
    corFavorita: "Azul"
}

let pessoa2: Pessoa = {
    nome: "Jose",
    idade: 22,
    corFavorita: "Vermelho"
}

let pessoa3: Pessoa = {
    nome: "Maria",
    idade: 25,
    corFavorita: "Verde"
}

//// D)

type Pessoa2 = {
    nome: string;
    idade: number;
    corFavorita: corFavorita
}

enum corFavorita {
    VERMELHOR = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}
