// Exercícios de interpretação de código

////////////// 1 //////////////
// A - undefined
// B - null
// C - 11
// D - 3
// E - [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// F - 9

////////////// 2 //////////////
// SUBI NUM ÔNIBUS EM MIRROCOS 27

//-------------------------------------------------------------//

// Exercícios de escrita de código

////////////// 1 //////////////
const nomeDoUsuario = prompt('Digite seu nome:');
const emailDoUsuario = prompt('Digite seu email:');

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

////////////// 2 //////////////
let comidasPreferidas = ["Pizza", "Batata Frita", "Lasanha", "Hambúrguer", "Churrasco"];

// A
console.log(comidasPreferidas)

// B
console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}
`);

// C
const comidaUsuario = prompt("Digite sua comida favorita:");
comidasPreferidas[1] = comidaUsuario;
console.log(comidasPreferidas);

//////////////// 3 //////////////
// A
let listaDeTarefas = [];

// B
const primeiraTarefa = prompt("Digite a primeira tarefa:");
const segundaTarefa = prompt("Digite a segunda tarefa:");
const terceiraTarefa = prompt("Digite a terceira tarefa:");

listaDeTarefas.push(primeiraTarefa);
listaDeTarefas.push(segundaTarefa);
listaDeTarefas.push(terceiraTarefa);
// OU listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa);

// C
console.log(listaDeTarefas);

// D
const remover = Number(prompt("Digite o indice da tarefa que ja realizou: (0, 1 ou 2)"));

// E
listaDeTarefas.splice(remover, 1);

// F
console.log(listaDeTarefas);


///////////////////// DESAFIOS /////////////////////

//////////////// 1 //////////////

const frase = 'Desafio para quebrar a cabeça!'
let listaFrase = frase.split(' ')
console.log(listaFrase)

////////////// 2 //////////////

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`O indice do Abacaxi é: ${frutas.indexOf("Abacaxi")}.
E o tamanho da array é: ${frutas.length}.
`)