// Exercícios de interpretação de código

//// 1 ////
// O CODIGO ESTA FAZENDO UM LOOP ATÉ O NUMERO 4 E EFETUANDO AS SOMAS 
// 0+0 , 0+1, 1+2, 3+3, 6+4 = O VALOR SERÁ: 10

//// 2 ////

// A
// TODOS OS NUMEROS MAIORES DE 18 SERÃO IMPRESSOS: 19. 21, 23, 25, 27, 30

// B
// TERIAMOS QUER CRIAR UMA VARIAVEL PARA O INDICE REMOVER O ELSE E IR INCREMENTANDO I++
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0
// for (let numero of lista) {
// 	console.log(i, numero)
//     i++
// }

//// 3 ////
// SERÁ IMPRESSO 4 LINHAS CADA UMA DELAS COM UM ASTERISTICO A MAIS


// Exercícios de escrita de código

//// 1 ////
const primeiro = () => {

    let listaDeAnimais = []
    let posicaoAnimal = 1
    const quantidadeDeAnimais = Number(prompt("Digite quantos animais você tem:"))

    if (quantidadeDeAnimais === 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else {
        for (let i = 0; i < quantidadeDeAnimais; i++) {
            const digitarNome = prompt(`Digite o nome do seu pet ${posicaoAnimal}:`)
            listaDeAnimais.push(digitarNome)
            posicaoAnimal++
        }
    }

    if (quantidadeDeAnimais !== 0) {
        for (let animail of listaDeAnimais) {
            console.log(animail)
        }
    }
}


//// 2 ////

const segundo = () => {
    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    //A
    for (let numero of array) {
        console.log(numero)
    }

    //B
    for (let numero of array) {
        console.log(numero/10)
    }

    //C
    const arrayPar = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            arrayPar.push(numero)
        }
    }
    console.log(arrayPar)

    //D
    let maiorNumero = 0
    let menorNumero

    for (let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }

    menorNumero = maiorNumero

    for (let numero of array) {
        if (numero < menorNumero) {
            menorNumero = numero
        }
    }


    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
}


////////////////////// DESAFIO //////////////////////////////

const primeirDesafio = () => {

    const numeroDoDesafio = Number(prompt("Digite um numero"))
    console.log("Vamos jogar!")
    let numeroTentativa
    let i = 0

    while(numeroDoDesafio !== numeroTentativa){
        numeroTentativa = Number(prompt("Digite um numero:"))
        console.log(`O numero chutado foi: ${numeroTentativa}`)
        i++
        if(numeroTentativa < numeroDoDesafio) {
            console.log("Errrrrrrrou, é maior")
        }else if (numeroTentativa > numeroDoDesafio) {
            console.log("Errrrrrrrou, é menor")
        } else {
            console.log("Acertou!!")
            console.log(`O número de tentativas foi: ${i}`)
        }
    }
}


const segundoDesafio = () => {
    
    const numeroDoDesafio = Math.floor((Math.random() * 100) + 1);
    console.log("Vamos jogar!")
    let numeroTentativa
    let i = 0

    while(numeroDoDesafio !== numeroTentativa){
        numeroTentativa = Number(prompt("Digite um numero:"))
        console.log(`O numero chutado foi: ${numeroTentativa}`)
        i++
        if(numeroTentativa < numeroDoDesafio) {
            console.log("Errrrrrrrou, é maior")
        }else if (numeroTentativa > numeroDoDesafio) {
            console.log("Errrrrrrrou, é menor")
        } else {
            console.log("Acertou!!")
            console.log(`O número de tentativas foi: ${i}`)
        }
    }
} 
/// FOI MAIS SIMPLES DO QUE EU ESPERAVA, FOI PRECISO ADICIONAR APENAIS UMA LINHA
///  ACHO QUE ADICINAR MAIS DICAS PARA O JOGADOR