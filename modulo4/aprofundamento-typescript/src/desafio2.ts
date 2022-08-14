enum years {
    AC = "AC",
    DC = "DC",
}

function idadeHistorica (ano: number, sigla: years = years.DC): string {
    if(sigla === years.AC) {
       if(ano > 4000) {
           return "Pré-História";
         } else {
           return "Idade Antiga";
         }
    } else {
        if(ano < 476) {
            return "Idade Antiga";
        } else if(ano < 1453) {
            return "Idade Média";
        } else if(ano < 1789) {
            return "Idade Moderna";
        } else {
            return "Idade Contemporânea";
        }
    }
}


console.log(idadeHistorica(10000, years.AC));