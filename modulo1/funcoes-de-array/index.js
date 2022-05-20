// Exercícios de interpretação de código

/// 1 ///
// Ela imprimi o primeiro objeto, depois o indice dele(0) e por ultimo a array completa
// E faz isso para todos os itens da array


/// 2 ///
// Uma array com o nome de cada pessoa.

/// 3 ///
// Uma array com os objetos que tiverem o apelido diferente de Chijo

//-------------------------------------------------------------//

// Exercícios de escrita de código

/// 1 ///

const primeiro = () => {

    const pets = [
        { nome: "Lupin", raca: "Salsicha" },
        { nome: "Polly", raca: "Lhasa Apso" },
        { nome: "Madame", raca: "Poodle" },
        { nome: "Quentinho", raca: "Salsicha" },
        { nome: "Fluffy", raca: "Poodle" },
        { nome: "Caramelo", raca: "Vira-lata" },
    ]

    // A
    const nomesDoguinhos = pets.map((dog) => {
        return dog.nome
    })

    console.log(nomesDoguinhos)

    // B

    const salsichas = pets.filter((dog) => {
        return dog.raca === "Salsicha"
    })

    console.log(salsichas)

    // C
    const poodles = pets.filter((dog) => {
        return dog.raca === "Poodle"
    })

    const mensDesconto = poodles.map((dog) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}!`
    })

    console.log(mensDesconto)

}

primeiro()

/// 1 ///

const segundo = () => {
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

    // A
    const nomesProdutos = produtos.map((produto) => {
        return produto.nome
    })

    console.log(nomesProdutos)

    // B
    const descontoProdutos = produtos.map((produto) => {
        let desconto = produto.preco * 0.95
        return { nome: produto.nome, preco: desconto.toFixed(2) }
    })

    console.log(descontoProdutos)

    // C
    const categoriaBebidas = produtos.filter((produto) => {
        return produto.categoria === "Bebidas"
    })

    console.log(categoriaBebidas)

    // D
    const ype = produtos.filter((produto) => {
        return produto.nome.includes("Ypê")
    })

    console.log(ype)

    // C
    const MenssagemYpe = ype.map((produto) => {
        if (produto.nome.includes("Ypê")) {
            return `Compre ${produto.nome} por R$${produto.preco.toFixed(2)}!`
        }
    })

    console.log(MenssagemYpe)

}

segundo()

///////////////////// DESAFIOS /////////////////////

const primeiroDesafio = () => {
    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
    ]
    // A
    let nomePokemons = pokemons.map((pokemon) => {
        return pokemon.nome
    })
    nomePokemons = nomePokemons.sort()

    console.log(nomePokemons)


    // B
    let tipoPokemonsRepetidos = pokemons.map((pokemon) => {
        return pokemon.tipo
    })

    let tipoPokemonsFiltrados = tipoPokemonsRepetidos.filter((pokemon, indice) => {
        return tipoPokemonsRepetidos.indexOf(pokemon) === indice;
    })

    tipoPokemonsFiltrados = tipoPokemonsFiltrados.sort()

    console.log(tipoPokemonsFiltrados)

}

primeiroDesafio()



