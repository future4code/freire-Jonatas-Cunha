enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoDeLancamento: number,
    genero: Genero
    pontuacao?: number
}


function filme (nome: string, anoDeLancamento: number, genero: Genero, pontuacao?: number): Filme {
    return pontuacao ? {nome, anoDeLancamento, genero, pontuacao} : {nome, anoDeLancamento, genero}
}

console.log(filme("Avengers", 2019, Genero.ACAO))
console.log(filme("Capitão América: O Primeiro Vingador", 2019, Genero.ACAO, 9))