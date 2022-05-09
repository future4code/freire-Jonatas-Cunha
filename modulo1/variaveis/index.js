////////////////////// Exercícios de interpretação de código /////////////////////////////

// 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

                                    /// RESPOSTA ///
/*  O primeiro console.log imprimirá 10, pois esse foi o valor atribuido a variavel b
    O segundo console. logo imprimirá 10, 5 pois b recebeu um novo valor e por ele ser do tipo let aceitou
    Perfeitamente
*/ 

// 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

                                    /// RESPOSTA ///
/*  O console.log imprimirá 10, 10, 10 pois as variaveis receberam novos valores antes do console.log
    ser execultado
*/

// 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
//     Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase.
//     Alem disso, os nomes não podem começar com números ou caracteres especiais.

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

                                    /// RESPOSTA ///
/*  O codigo pede para o usuario digitar quantas horas trabalha por dia e armazena na variavel p,
    depois o pede para digitar quanto recebe por dia e armazena na variavel t, para finalizar ele 
    divide o valor recebido por dia pelas horas trabalhadas e mostra um alerta na tela com o resultado
    do calculo.
                                MELHORIA DO CODIGO
    let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?");
    let remuneracaoPorDia = prompt("Quanto você recebe por dia?");
    alert(`Voce recebe ${remuneracaoPorDia/horasTrabalhadasPorDia} por hora`);
*/

////////////////////// Exercícios de escrita de código ////////////////////////////

                                    /// RESPOSTA - 1 ///

let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);

/*  O tipo é undefined pois as variaveis foram criadas e nenhum valor foi atribuido a elas. */

nome = prompt("Digite seu nome:");
idade = prompt("Digite sua idade:");
console.log(typeof nome);
console.log(typeof idade);

/* O tipo agora sera String pois o prompt retornara como string */

console.log("Olá", nome, "você tem", idade, "anos.")


                                    /// RESPOSTA - 2 ///

let resposta1 = prompt("Voce gosta de animais?")
let resposta2 = prompt("Voce gosta de games?")
let resposta3 = prompt("Voce gosta de programar?")
console.log("Voce gosta de animais? -", resposta1)
console.log("Voce gosta de games? -", resposta2)
console.log("Voce gosta de programar? -", resposta3)

                                    /// RESPOSTA - 3 ///

let a = 10
let b = 25

let c = a
let d = b

a = d
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10



