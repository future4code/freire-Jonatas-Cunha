enum Setores {
    MKT = 'Marketing',
    VEND = 'Vendas',
    FINANC = 'Financeiro',
}

type Funcionario = {
    nome: string,
    salario: number,
    setor: Setores,
    presencial: boolean
}

const funcionarios: Funcionario[] = [
    { nome: "Marcos", salario: 2500, setor: Setores.MKT, presencial: true },
    { nome: "Maria", salario: 1500, setor: Setores.VEND, presencial: false },
    { nome: "Salete", salario: 2200, setor: Setores.VEND, presencial: true },
    { nome: "João", salario: 2800, setor: Setores.MKT, presencial: false },
    { nome: "Josué", salario: 5500, setor: Setores.VEND, presencial: true },
    { nome: "Natalia", salario: 4700, setor: Setores.VEND, presencial: true },
    { nome: "Paola", salario: 3500, setor: Setores.MKT, presencial: true }
]

function funcionariosPresencial(funcionarios: Funcionario[]): Funcionario[] {
   return funcionarios.filter(funcionario => funcionario.presencial && funcionario.setor === Setores.MKT)
}

console.log(funcionariosPresencial(funcionarios))