// 1 
/// A) atraves do process.argv[posição]

/// B) 
const nome = process.argv[2];
const idade = process.argv[3];
const resultado = parseInt(idade) + 7;

const Green = "\x1b[32m"
const Red = "\x1b[31m"
const Blue = "\u001b[34m"

if (!nome || !idade || isNaN(idade)) {
    console.log(Red + "Nome ou idade inválida!");
    console.log(Blue + "Modelo: npm start nome idade");

} else {
    // console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
    console.log(Green + `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${resultado} anos.`);
}