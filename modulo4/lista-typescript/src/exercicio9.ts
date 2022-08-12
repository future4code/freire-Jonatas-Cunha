function anagramas(palavra: string): number {
    
    let palavraArray: string[] = palavra.split('');
    let novaPalavra: boolean = [new Set(palavraArray)].length !== palavraArray.length

    if (!novaPalavra) {
        return (0)
    } else {
        let anagramas: number = 1
        for (let i = palavraArray.length; i > 0; i--) {
            anagramas = anagramas * i
        }

        return (anagramas)
    }

}

console.log(anagramas("telhado"))