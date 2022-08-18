function infosUsuarios(nome: string, birthdayDate: string): string {
    const day: number = +birthdayDate.split('/')[0];
    const month = (): string => {
        const mes = birthdayDate.split('/')[1]
        switch (mes) {
            case '01':
                return 'Janeiro';
            case '02':
                return 'Fevereiro';
            case '03':
                return 'Março';
            case '04':
                return 'Abril';
            case '05':
                return 'Maio';
            case '06':
                return 'Junho';
            case '07':
                return 'Julho';
            case '08':
                return 'Agosto';
            case '09':
                return 'Setembro';
            case '10':
                return 'Outubro';
            case '11':
                return 'Novembro';
            case '12':
                return 'Dezembro';
            default:
                return 'Mês inválido';
        }
    }
    const year: number = +birthdayDate.split('/')[2];
    return `Olá me chamo ${nome}, nasci no dia ${day} do mês de ${month()} do ano de ${year}`;
}

console.log(infosUsuarios('João', '10/10/1990'));