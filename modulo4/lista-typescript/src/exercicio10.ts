export const CpfChecker = (strCPF: string): boolean => {
    let cpf: string =  strCPF.replace(/[^\d]+/g, '');
    let sum: number = 0;
    let Remainder: number;

    if (new Set(cpf.split('')).size === 1 || cpf.length !== 11) return false

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Remainder = (sum * 10) % 11;

    if ((Remainder === 10) || (Remainder === 11)) Remainder = 0;
    if (Remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Remainder = (sum * 10) % 11;

    if ((Remainder === 10) || (Remainder === 11)) Remainder = 0;
    if (Remainder !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

console.log(CpfChecker("746.533.000-97")); // true
console.log(CpfChecker("74653300097")); // true

console.log(CpfChecker("222.222.222-22")); // false
console.log(CpfChecker("22222222222")); // false