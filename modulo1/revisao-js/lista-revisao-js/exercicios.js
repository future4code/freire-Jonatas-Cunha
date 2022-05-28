// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let tamanhoArray = array.length - 1
    let novaArray = []
    for (let i = tamanhoArray; i >= 0; i--) {
        novaArray.push(array[i])
    }
    return novaArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            numerosPares.push(numero)
        }
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesElevadoADois = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            numerosParesElevadoADois.push(numero ** 2)
        }
    }
    return numerosParesElevadoADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = { maiorNumero: "", maiorDivisivelPorMenor: "", diferenca: "" }
    let menorNumero
    if (num1 > num2) {
        objeto.maiorNumero = num1, menorNumero = num2
    } else {
        objeto.maiorNumero = num2, menorNumero = num1
    }
    objeto.maiorDivisivelPorMenor = objeto.maiorNumero % menorNumero === 0
    objeto.diferenca = objeto.maiorNumero - menorNumero
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let i = 0; array.length < n; i++) {
        if (i % 2 === 0) {
            array.push(i)
        }
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    const detectaMaiorNumero = (array) => {
        let maiorNumero = 0
        for (let numero of array) {
            if (numero > maiorNumero) {
                maiorNumero = numero
            }
        }
        return maiorNumero
    }

    const detectaMenorNumero = (array) => {
        let menorNumero = detectaMaiorNumero(array)
        for (let numero of array) {
            if (numero < menorNumero) {
                menorNumero = numero
            }
        }
        return menorNumero
    }

    let maiorNumero = detectaMaiorNumero(array)
    let menorNumero = detectaMenorNumero(array)


    const novaArray = array.filter((numero) => {
        if(array.length === 2) {
            return array
        }
        if (numero < maiorNumero && numero > menorNumero) {
            return numero
        }
    })

    if(array.length === 2 || array.length === 3 || array.length === 1) {
        maiorNumero = detectaMaiorNumero(array)
        menorNumero = detectaMenorNumero(array)
        return [menorNumero, maiorNumero]
    } else {
        maiorNumero = detectaMaiorNumero(novaArray)
        menorNumero = detectaMenorNumero(novaArray)
        return [maiorNumero, menorNumero]
    }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = ""
    for (let ator of filme.atores) {
        if (filme.atores.indexOf(ator) === (filme.atores.length - 1)) {
            atores += `${ator}`
        } else {
            atores += `${ator}, `
        }
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizados = pessoas.filter((pessoa) => {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            return pessoa
        }
    })
    return autorizados
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizados = pessoas.filter((pessoa) => {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60) {
            return pessoa
        }

    })
    return naoAutorizados
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let total = 0
    for (let i = 0; i < contas.length; i++) {
        for (let c = 0; c < contas[i].compras.length; c++) {
            total += contas[i].compras[c]
        }
        contas[i].compras = []
        contas[i].saldoTotal -= total
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const ordemAlfabetica = consultas.sort((primeiro, segundo) => {
        if (primeiro.nome > segundo.nome) {
            return 1
        } else if (segundo.nome > primeiro.nome) {
            return -1
        } else {
            return 0
        }
    })

    return ordemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}




