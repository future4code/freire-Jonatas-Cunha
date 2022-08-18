function anagramas(palavra: string): number {
    
    let repetidas: boolean = new Set(palavra).size !== palavra.length
    
    if (repetidas) {
        return (0)
    } else {
        let anagramas: number = 1
        for (let i = palavra.length; i > 0; i--) {
            anagramas = anagramas * i
        }

        return (anagramas)
    }

}

console.log(anagramas("telhado")) // Sem repetição
console.log(anagramas("abacate")) // Com repetição