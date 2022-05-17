// Exercícios de interpretação de código

//// 1

//A
//   O CODIGO VERIFICA SE O NUMERO DIGITADO PELO USUARIO É DIVISIVEL POR 2
//   SE SIM ELE IMPRIME PASSOU NO TESTE
//   SE NÃO ELE IMPRIME NÃO PASSOU NO TESTE

//B
//  APENAS NUMERO DIVISIVEIS POR 2

//C 
//  NUMEROS QUE NÃO SÃO DIVISIVEIS POR 2


//// 2

//A
//  PARA MOSTRAR O VALOR DA FRUTA ESCOLHIDA

//B
//  O preço da fruta, Maçã é R$ 2.25

//C
//  ELE VAI CONTINUAR EXECUTANDO O CODIGO ATÉ ENCONTRAR O BREAK DO DEFAULT
//  E NO CONSOLE FAI IMPRIR O ULTMIMO VALOR QUE NO CASO É O DO DEFAULT 5

//// 3

//A
//  VAI ARMAZENAR NA VARIAVEL NUMERO O VALOR DIGITADO PELO USUARIO NO PROMPT

// B
//   VAI IMPRIMIR QUE PASSOU NO TESTE E DEPOIS VAI DA ERRO POIS A VARIVEL NÃO FOI DECLARADA NO ESCOPO GLOBAL
//   NÃO VAI IMPRIRMIR NADA E  DEPOIS VAI DA ERRO POIS A VARIVEL NÃO FOI DECLARADA NO ESCOPO GLOBAL

//C
//  QUANDO A VARIAVEL É DECLARADA NO ESCOPO FILHO NÃO PODEMOS ACESSAR NO ESCOPO PAI

// Exercícios de escrita de código

const primeiro = () => {
    //A
    const idade = prompt("Digite Sua idade:");

    //B
    idade = Number(idade)

    //C
    if (idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir.")
    }
}

const segundo = () => {
    const turnoDeEstudo = prompt("Digite seu turno de estudo: M (matutino) ou V (Vespertino) ou N (Noturno)")

    if (turnoDeEstudo === "M") {
        console.log("Bom Dia!")
    } else if (turnoDeEstudo === "V") {
        console.log("Boa Tarde!")
    } else {
        console.log("Boa Noite!")
    }
}

const terceiro = () => {
    const turnoDeEstudo = prompt("Digite seu turno de estudo: M (matutino) ou V (Vespertino) ou N (Noturno)")
    switch (turnoDeEstudo) {
        case "M":
            console.log("Bom Dia!")
            break
        case "V":
            console.log("Bom Tarde!")
            break
        case "N":
            console.log("Bom Noite!")
            break
        default:
            console.log("Turno não encontrado!")
            break
    }
}

const quarto = () => {
    const gerneroFilme = prompt("Digite o genero de filme que vai assistir:")
    const ingresso = Number(prompt("Digite o valor do ingresso:"))

    if (gerneroFilme === "fantasia" && ingresso < 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }

}

////////////////////// DESAFIO /////////////////////////////

const primeiroDesafio = () => {
    const gerneroFilme = prompt("Digite o genero de filme que vai assistir:")
    const ingresso = Number(prompt("Digite o valor do ingresso:"))

    if (gerneroFilme === "fantasia" && ingresso < 15) {
        const lanche = prompt("Qual lanche você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanche}`)
    } else {
        console.log("Escolha outro filme :(")
    }

}

const segundoDesafio = () => {
    const nomeCompleto = prompt("Digite seu nome completo:")
    let tipoDoJogo = prompt("Digite IN para internacional e DO para doméstico;:")
    let etapaDoJogo = prompt("Digite SF para semi-final, DT para decisão de terceiro lugar e FI para final")
    const categoria = Number(prompt("Escolha a categoria 1, 2, 3 ou 4:"))
    const quantidadeDeIngresso = Number(prompt("Quantidade de ingressos:"))

    let valorDoIngresso
    let moeda

    // VERIFICA A ETAPA DO JOGO, A CATEGORIA E ATRIBUIR O VALOR DO INGRESSO A VARIAVEL
    if (etapaDoJogo === "SF"){
        if (categoria === 1) {
            valorDoIngresso = 1320
        } else if (categoria === 2) {
            valorDoIngresso = 880
        } else if (categoria === 3) {
            valorDoIngresso = 550
        } else {
            valorDoIngresso = 220
        }
    } else if (etapaDoJogo === "DT") {
        if (categoria === 1) {
            valorDoIngresso = 660
        } else if (categoria === 2) {
            valorDoIngresso = 440
        } else if (categoria === 3) {
            valorDoIngresso = 330
        } else {
            valorDoIngresso = 170
        }
    } else {
        if (categoria === 1) {
            valorDoIngresso = 1980
        } else if (categoria === 2) {
            valorDoIngresso = 1320
        } else if (categoria === 3) {
            valorDoIngresso = 880
        } else {
            valorDoIngresso = 330
        }
    }

    // MODIFICA O NOME DA VARIAVEL TIPO DO JOGO; ADICIONAR O TIPO DA MOEDA E CONVERTE O VALOR

    if (tipoDoJogo === "IN") {
        valorDoIngresso = valorDoIngresso * 4.10
        tipoDoJogo = "Internacional"
        moeda = "U$"
    } else {
        tipoDoJogo = "Nacional"
        moeda = "R$"
    }

    // MODIFICA O NOME DA VARIAVEL ETAPA DO JOGO

    if (etapaDoJogo === "SF") {
        etapaDoJogo = "Semifinais"
    } else if (etapaDoJogo === "DT") {
        etapaDoJogo = "Decisão do 3°Lugar"
    } else {
        etapaDoJogo = "Final"
    }

    console.log(`
    ---Dados da compra---
    Nome do Cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de Ingressos: ${quantidadeDeIngresso}
    ---Valores---
    Valor do ingresso: ${moeda} ${valorDoIngresso}
    Valor total: ${moeda} ${valorDoIngresso * quantidadeDeIngresso}`)

}
