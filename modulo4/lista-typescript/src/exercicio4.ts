enum SETORES {
    MKT = 'Marketing',
    VEND = 'Vendas',
    FINANC = 'Financeiro',
}

type Funcionario = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean
}

const funcionarios: Funcionario[] = [
    { nome: "Marcos", salario: 2500, setor: SETORES.MKT, presencial: true },
    { nome: "Maria", salario: 1500, setor: SETORES.VEND, presencial: false },
    { nome: "Salete", salario: 2200, setor: SETORES.VEND, presencial: true },
    { nome: "João", salario: 2800, setor: SETORES.MKT, presencial: false },
    { nome: "Josué", salario: 5500, setor: SETORES.VEND, presencial: true },
    { nome: "Natalia", salario: 4700, setor: SETORES.VEND, presencial: true },
    { nome: "Paola", salario: 3500, setor: SETORES.MKT, presencial: true }
]

function funcionariosPresencial(funcionarios: Funcionario[]): Funcionario[] {
   return funcionarios.filter(funcionario => funcionario.presencial && funcionario.setor === SETORES.MKT)
}

console.log(funcionariosPresencial(funcionarios))