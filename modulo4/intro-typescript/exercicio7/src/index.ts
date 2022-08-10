const frase:string = "ATTGCTGCGCATTAACGACGCGTA"
const array:string[] = frase.split("")

const novoRNA:string = array.map( (nitrogenadas:string) => {
    if(nitrogenadas === "A"){
        return "U"
    } else if(nitrogenadas === "T"){
        return "A"
    } else if(nitrogenadas === "C"){
        return "G"
    } else if(nitrogenadas === "G"){
        return "C"
    }
}).join("")

console.log(novoRNA)