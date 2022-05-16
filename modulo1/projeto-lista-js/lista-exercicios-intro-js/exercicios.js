// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const base = Number(prompt("Digite o valor da base:"))
  const altura = Number(prompt("Digite o valor da base:"))

  console.log(base * altura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoDeNascimento = Number(prompt("Digite o ano do seu nascimento:"))

  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite sua idade:")
  const email = prompt("Digite seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corUm = prompt("Digite uma cor:")
  const corDois = prompt("Digite outra cor:")
  const corTres = prompt("Digite outra cor:")
  let CoresFavoritas = [corUm, corDois, corTres]
  console.log(CoresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]  // ELE PEGA A QUANTIDADE DE ITENS DA ARRAY E COLOCA -1 COM ISSO PEGA O ULTIMO VALOR DA ARRAY
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimo = array[array.length - 1] 
  const primeiro = array[0] 
  array[array.length - 1] = primeiro
  array[0] = ultimo
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  return string1 == string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoDeNascimento = Number(prompt("Digite o ano do seu nascimento:"))
  const dataDeExpedicao = Number(prompt("Digite o ano expedição do RG:"))

  const idade = Number(anoAtual) - Number(anoDeNascimento)
  const idadeRg = Number(anoAtual) - Number(dataDeExpedicao)

  const primeiroCheck = idade <= 20 && idadeRg >= 5
  const segundoCheck = idade > 20 && idade <= 50 && idadeRg >= 10
  const terceiroCheck = idade > 50 && idadeRg >= 15

  console.log(primeiroCheck || segundoCheck || terceiroCheck)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const primeiraChecagem = ano % 4 === 0
  const segundaChecagem = ano % 400 === 0
  const terceiraChecagem = ano % 100 === 0

  return primeiraChecagem && segundaChecagem === terceiraChecagem
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let maiorDeIdade = prompt("Você é de maior? (sim ou não)")
  let ensinoMedioCompleto = prompt("Você já concluiu o ensino medio?: (sim ou não)")
  let disponibilidadeDeHorario = prompt("Você tem disponibilidade no horario do curso?: (sim ou não)")

  maiorDeIdade = maiorDeIdade.toLowerCase() === "sim"
  ensinoMedioCompleto = ensinoMedioCompleto.toLowerCase() === "sim"
  disponibilidadeDeHorario = disponibilidadeDeHorario.toLowerCase() === "sim"

  const aprovado = maiorDeIdade && ensinoMedioCompleto && disponibilidadeDeHorario
  
  console.log(aprovado)

}