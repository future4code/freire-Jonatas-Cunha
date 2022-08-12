function tipo(valor: any): string {
    return typeof valor;
}


console.log("NUMBER");
console.log(tipo(1));
console.log("----------------------------------------------------");

console.log("STRING");
console.log(tipo("1"));
console.log("----------------------------------------------------");

console.log("BOOLEAN");
console.log(tipo(true));
console.log("----------------------------------------------------");

console.log("ARRAY");
console.log(tipo([1, 2, 3]));
console.log("----------------------------------------------------");

console.log("OBJECT");
console.log(tipo({ nome: "João", idade: 20 }));
console.log("----------------------------------------------------");
