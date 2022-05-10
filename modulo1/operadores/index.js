// Exercícios de interpretação de código

// 1 //

// A = false
// B = false
// C = true
// D = boolean


/// 2 ///

// Será concatenado, pois o comando prompt sempre retornara uma string.
// Dever ser feito a conversão para Number() antes de fazer a adição.


/// 3 ///

let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = Number(primeiroNumero) + Number(segundoNumero);  // TRANSFORMAR AS STRINGS EM NUMBERS

console.log(soma);


// Exercícios de escrita de código

/// 1 ///

let suaIdade = Number(prompt("Digite sua idade:"));
let idadeAmigo = Number(prompt("Digite a idade de seu melhor amigo:"));

const comparacao = suaIdade > idadeAmigo;

console.log(`Sua idade é maior do que a do seu melhor amigo? - ${comparacao}`);
console.log(`A diferença de idade é de ${suaIdade - idadeAmigo} anos.`);


/// 2 ///

const num = Number(prompt("Digite um numero par:"));

console.log(num % 2);

// PAR - O resto da divisão sempre será 0;
// IMPAR - O resto da divisão sempre será 1;


/// 3 ///

const idade = Number(prompt("Digite sua idade:"));
const meses = idade * 12;
const dias = idade * 365;
const horas = (365 * 24) * idade;

console.log(`Idade em Meses: ${meses} Meses`);
console.log(`Idade em Dias: ${dias} Dias`);
console.log(`Idade em Horas: ${horas} Horas`);

/// 4 ///

const num1 = Number(prompt("Digite um numero:"))
const num2 = Number(prompt("Digite outro numero:"))

console.log(`O primeiro numero é maior que segundo? - ${num1 > num2}`);
console.log(`O primeiro numero é igual ao segundo? - ${num1 === num2}`);
console.log(`O primeiro numero é divisível pelo segundo? - ${num1 % num2 === 0}`);
console.log(`O segundo numero é divisível pelo primeiro? true - ${num2 % num1 === 0}`);


////////////////////////// DESAFIOS ///////////////////////////////

//////////////////// 1 ///////////////////////
// A 
console.log(`77ºF = ${(77 - 32) * (5/9) + 273.15}K`)

// B
console.log(`80ºC = ${(80)*(9/5) + 32}ºF`)

// C
console.log(`30ºC = ${(30)*(9/5) + 32}ºF e ${(86 - 32) * (5/9) + 273.15}K`)

//D
const celsius = Number(prompt("Digite o valor que deseja converter:"))
const cParaF = (celsius)*(9/5) + 32
const fParaK = (cParaF - 32) * (5/9) + 273.15

console.log(`${celsius}ºC = ${cParaF}ºF e ${fParaK}K`)


//////////////////// 2 ///////////////////////
// A
console.log(`280 Quilowatts-Hora = R$ ${0.05 * 280}`)

// B
console.log(`280 Quilowatts-Hora com 15% de desconto = R$ ${(0.05 * 280) * 0.85}`)


//////////////////// 3 ///////////////////////
// A
console.log(`20lb equivalem a ${(20 / 2.2046).toFixed(5)} KG`);

// B 
console.log(`10.5oz equivalem a ${(10.5 / 35.274).toFixed(5)} KG`);

// C
console.log(`100mi equivalem a ${(100 / 0.00062137).toFixed(1)} M`);

// D
console.log(`50ft equivalem a ${(50 / 3.2808).toFixed(2)} M`);

// E
console.log(`103.56gal equivalem a ${(103.56 / 0.26417).toFixed(2)} L`);

// F
console.log(`450 xic equivalem a ${(450 / 4.2268).toFixed(2)} L`);

// G
const xicaras = Number(prompt("Digite o numero de xicaras:"))
console.log(`${xicaras} xic equivalem a ${(xicaras / 4.2268).toFixed(2)} L`);


