function verificarAnos (data: string): number {
    let convercaoData: Date = new Date(data);
    let dataAtual: Date = new Date();
    let timeDiff: number = Math.abs(dataAtual.getTime() - convercaoData.getTime());
    let diffDays: number = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let anos: number =  diffDays / 365;
    return parseInt(anos.toString());
}



function renovarIdentidade(): boolean {

    var idade = verificarAnos(process.argv[2]);
    var tempoIdentidade = verificarAnos(process.argv[3])

    if (idade <= 20 && tempoIdentidade >= 5) {
        return true;
    } else if (idade > 20 && idade <=50 && tempoIdentidade >= 10) {
        return true;
    } else if (idade > 50 && tempoIdentidade >= 15) {
        return true;
    } else {
        return false;
    }

}

console.log(renovarIdentidade());