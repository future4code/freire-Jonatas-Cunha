const operação = process.argv[2];
const n1 = !isNaN(process.argv[3]) ? parseInt(process.argv[3]) : undefined;
const n2 = !isNaN(process.argv[4]) ? parseInt(process.argv[4]) : undefined;

const Green = "\x1b[32m"
const Red = "\x1b[31m"

if (!operação || isNaN(n1) || isNaN(n2)) {
    console.log(Red + "Operação ou número(s) inválido(s)!");
} else {
    switch (operação) {
        case 'add':
            console.log(Green + `A soma dos valores é: ${n1 + n2}`);
            break;
        case 'sub':
            console.log(Green + `A subtração dos valores é: ${n1 - n2}`);
            break;
        case 'mult':
            console.log(Green + `A multiplicação dos valores é: ${n1 * n2}`);
            break;
        case 'div':
            console.log(Green + `A divisão dos valores é: ${n1 / n2}`);
            break;
        default:
            console.log(Red + 'Operação inválida');
            break;
    }
}


