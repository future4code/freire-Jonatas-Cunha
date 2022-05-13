// Exercícios de interpretação de código //

//////////////////// 1 ////////////////////

// A) 10 e 50
// B) Rodará a função mas não imprimirá nada no console.

//////////////////// 2 ////////////////////

// A )  A função tem um parâmetro, recebe um argumento,
//      deixa todas as letras em minusculo e verifica se
//      ela possui a palavra cenoura.
//      Ela serve para verificar se a frase possui a palavara cenoura.

// B )  I   - true  // ele está exatamento como o includes pede
//      II  - true // pois o antes de verificar ele usa o comando toLowerCase
//      III - true // pois o includes ingnora o s do final, ele só considera se tem a sequencia de palavras // c-e-n-o-u-r-a-O QUE VEM DEPOIS NÃO IMPORTA


// Exercícios de escrita de código //

//////////////////// 1 ////////////////////

// A
const apresentacao = () => {
	console.log("Eu sou Jônatas, tenho 22 anos, moro em Recife e sou estudante.")
}

apresentacao()

// B
const apresentacaoEditavel = (nome, idade, cidade, profissao) => {
	return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

const informacoes = apresentacaoEditavel("Jônatas", 22, "Recife", "estudante")
console.log(informacoes)

//////////////////// 2 ////////////////////

// A
const somaDoisNumero = (num1, num2) => {
	return num1 + num1
}

console.log(`A soma dos numeros é: ${somaDoisNumero(5, 5)}`)

// B
const comparaDoisNumero = (num1, num2) => {
	return num1 >= num1
}

console.log(`O primeiro numero é maior ou igual ao segundo? ${comparaDoisNumero(5, 5)}`)

// C
const verificaNumeroPar = (num1) => {
	return num1 % 2 == 0
}

console.log(`O numero é par? ${verificaNumeroPar(6)}`)

// D
const converteFrase = (frase) => {
	console.log(`${frase.length}, ${frase.toLowerCase()} `)
}

converteFrase("Função em JS é muito facil!")

//////////////////// 3 ////////////////////

const soma = (num1, num2) => {
	return num1 + num2
}

const subtracao = (num1, num2) => {
	return num1 - num2
}

const mutiplicacao = (num1, num2) => {
	return num1 * num2
}

const divisao = (num1, num2) => {
	return num1 / num2
}

const numeroUm = Number(prompt("Digite o primeiro numero:"))
const numeroDois = Number(prompt("Digite o segundo numero:"))

console.log(`
Números inseridos: ${numeroUm} e ${numeroDois}
Soma: ${soma(numeroUm, numeroDois)}
Diferença: ${subtracao(numeroUm, numeroDois)}
Multiplicação: ${mutiplicacao(numeroUm, numeroDois)}
Divisão: ${divisao(numeroUm, numeroDois)}
`)


/////////////////////////////// DESAFIO //////////////////////////////

//////////////////// 1 ////////////////////

// A
const desafioA = (parametro) => console.log(parametro)

// B

const desafioB = (num1, num2) => num1 + num2
desafioA(desafioB(5, 2))


//////////////////// 2 ////////////////////

const teorema = (num1, num2) => {
	let hip = (num1 ** 2) + (num2 ** 2)
	console.log(Math.pow(hip, 0.5))
// 	console.log(Math.sqrt(hip)) /// OUTRA FORMA DE FAZER

}

teorema(30, 2)