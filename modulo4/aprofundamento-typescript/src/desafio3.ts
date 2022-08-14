enum classificacao {
    VERAO = 'Verão',
    INVERNO = 'Inverno',
    BANHO = 'Banho',
    INTIMA = 'Intima',
}

type Produto = {
    nome: string;
    preco: number;
    classificacao: classificacao;
    precodesc?: number | undefined;
}

const produtos: Produto[] = [
    {
        nome: 'Biquini',
        preco: 29.90,
        classificacao: classificacao.VERAO,
    },
    {
        nome: 'Calça',
        preco: 59.90,
        classificacao: classificacao.INVERNO,
    },
    {
        nome: 'Camisa',
        preco: 49.90,
        classificacao: classificacao.VERAO,
    },
    {
        nome: 'Toalha',
        preco: 19.90,
        classificacao: classificacao.BANHO,
    }
]

function calcDesconto (produto: Produto[]): Produto[] {
    const desconto: number = 0
    produto.forEach(produto => {
        produto.precodesc = (produto.preco - (produto.preco * 
            (produto.classificacao === classificacao.VERAO ? 0.05 : desconto 
            || produto.classificacao === classificacao.INVERNO ? 0.1 : desconto
            || produto.classificacao === classificacao.BANHO ? 0.04 : desconto
            || produto.classificacao === classificacao.INTIMA ? 0.07 : desconto)))
    } )
    return produto
}

console.log(calcDesconto(produtos))