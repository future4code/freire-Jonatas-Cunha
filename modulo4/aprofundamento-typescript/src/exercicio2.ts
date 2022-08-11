// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }


function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// A) ENTRADA DE DADOS = ARRAY DE NUMEROS; SAÍDA DE DADOS = OBJETO COM AS ESTATÍSTICAS
// B) numerosOrdenados = number[]; soma = number; estatisticas = object
// C) 

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => object
}

const amostraDeIdades: AmostraDeDados = {
    numeros: [23, 14, 17, 44, 35],
    obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))