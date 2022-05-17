// Exercícios de interpretação de código

////  1
// console.log(filme.elenco[0])                        /// Matheus Nachtergaele  // VAI PEGAR O PRIMEIRO ITEM DA ARRY DENTRO DO OBJETO
// console.log(filme.elenco[filme.elenco.length - 1])  /// Virginia Cavendish    // VAI PEGAR O ULTIMO ITEM DA ARRY DENTRO DO OBJETO
// console.log(filme.transmissoesHoje[2])              /// Denise Fraga          // VAI PEGAR O TERCEIRO ITEM DA ARRY DENTRO DO OBJETO

////  2

/// A
// console.log(cachorro)  /// nome: 'Juca', idade: 3, raca: 'SRD'
// console.log(gato)      /// nome: 'Juba', idade: 3, raca: 'SRD'
// console.log(tartaruga) /// nome: 'Jubo', idade: 3, raca: 'SRD'

/// B
// ELA FAZ UMA COPIA DAS PROPIEDADES DO OBJETO cachorro E DEPOIS É FEITA A COPIA DO OBJETO ...gato

////  3

/// A 
// console.log(minhaFuncao(pessoa, "backender"))  /// false
// console.log(minhaFuncao(pessoa, "altura"))     /// undefined

/// B
/// NO PRIMEIRO CONSOLE IMPRIMIU false POIS A FUNÇÃO RECEBEU O OBJETO E DEPOIS UMA PROPIEDADE DESSE OBJETO
/// NO SEGUNDO CONSOLE IMPRIMIU undefined POS O PROPIEDADE PASSADA NÃO EXISTE NO OBJETO


// Exercícios de escrita de código

////  1

/// A
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"],
}

const imprimePessoa = (objeto) => console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

/// B

const novaPessoa = {
    ...pessoa,
    apelidos: ["Dinha", "Mama", "Di"],

}

imprimePessoa(pessoa)
imprimePessoa(novaPessoa)



//// 2

const pessoaUm = {
    nome: "Jonatas",
    idade: "22",
    profissao: "Estudante",
}

const pessoaDois = {
    nome: "José",
    idade: "36",
    profissao: "Programador",
}

const impimePessoa2 = (objeto) => console.log(`"${objeto.nome}", ${objeto.nome.length}, ${objeto.idade}, "${objeto.profissao}", ${objeto.profissao.length}`)

impimePessoa2(pessoaUm)
impimePessoa2(pessoaDois)

//// 3

/// A
let carrinho = []

/// B

const objUm = {
    nome: "Maçã",
    disponibilidade: true,
}

const objDois = {
    nome: "Uva",
    disponibilidade: true,
}

const objTres = {
    nome: "Melão",
    disponibilidade: true,
}

/// C

const funcao = (fruta) => carrinho.push(fruta)

funcao(objUm)
funcao(objDois)
funcao(objTres)

console.log(carrinho)


/////////////////////////////////// DESAFIO ///////////////////////////////////

//// 1
const desafioUm = () => {
    const nome = prompt("Digite seu nome:")
    const idade = prompt("Digite sua idade:")
    const profissao = prompt("Digite sua profissao:")

    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

    console.log(pessoa)
    console.log(typeof pessoa)
}

//// 2

const desafioDois = (obj1, obj2) => {

    const comparacaoUm = obj1.ano < obj2.ano
    const comparacaoDois = obj1.ano === obj2.ano

    console.log(`O primeiro filme foi lançado antes do segundo? ${comparacaoUm}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparacaoDois}`)

}

const objeto1 = {
    ano: 2002,
    nome: "O Senhor dos Anéis"
}

const objeto2 = {
    ano: 2001,
    nome: "Harry Potter e a Pedra Filosofal"
}

//// 3

const desafioTres = (fruta) => {
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}
