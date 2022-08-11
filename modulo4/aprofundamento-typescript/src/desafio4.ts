enum classificacao {
    ENTRADA = "entrada",
    PORCAO = "porcao",
    PRATO = "prato",
    SOBREMESA = "sobremesa",
    BEBIDA = "bebida"
}

type Product = {
    nome: string;
    custo: number;
    preco: number;
    classificacao: classificacao;
    ingredientes?: string[];
}

type Venda = {
    cliente: string;
    produto: string[];
    total: number;
}


const products: Product[] = [
    {
        nome: "Galeto",
        custo: 20,
        preco: 30,
        classificacao: classificacao.PRATO,
    }
]

function newProduct(
    nome: string,
    custo: number,
    preco: number,
    classificacao: classificacao,
    ingredientes?: string[]
) { products.push({ nome, custo, preco, classificacao, ingredientes }) }

newProduct("Pizza de Calabresa", 10, 22, classificacao.PRATO, ["Calabresa", "Mussarela", "Parmesão"])
newProduct("Pizza de Mussarela", 10, 15, classificacao.PRATO, ["Mussarela", "Parmesão"])
newProduct("Sorvete", 10, 15, classificacao.SOBREMESA, ["Chocolate", "Morango", "Leite Condensado"])
newProduct("Refrigerante", 10, 15, classificacao.BEBIDA, ["Água", "Cerveja", "Suco"])

console.log(products)



function searchPrice(products: Product[], nome: string): number {
    return products.find(product => product.nome === nome)?.preco ?? 0
}

console.log(searchPrice(products, "Pizza de Calabresa"))



const vendas: Venda[] = [
    {
        cliente: "João",
        produto: ["Pizza de Calabresa", "Sorvete"],
        total: 37,
    },
    {
        cliente: "Maria",
        produto: ["Pizza de Mussarela", "Refrigerante"],
        total: 30,
    }
]

function newVenda(cliente: string, produto: string[], total: number) {
    vendas.push({ cliente, produto, total })
}


newVenda("Pedro", [ products[0].nome ], products[0].preco)
newVenda("Jose", [ products[0].nome ], products[0].preco)
newVenda("Joao", [ products[0].nome ], products[0].preco)


console.log(vendas)

const totalVendas = (vendas: Venda[]): number => {
    let total = 0
    vendas.forEach(venda => {
        total += venda.total
    })
    return total
}

console.log(totalVendas(vendas))