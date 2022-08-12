enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoDeLancamento: number,
    genero: GENERO
    pontuacao?: number
}


function filme (nome: string, anoDeLancamento: number, genero: GENERO, pontuacao?: number): Filme {
    return {
        nome,
        anoDeLancamento,
        genero,
        pontuacao
    }
}

console.log(filme("Avengers", 2019, GENERO.ACAO))
console.log(filme("Capitão América: O Primeiro Vingador", 2019, GENERO.ACAO, 9))