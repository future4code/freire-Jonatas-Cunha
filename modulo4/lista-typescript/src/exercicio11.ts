function converteRomano (numero: number): string {
    const numerosDecimais: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const numerosRomanos: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let romano: string = ""
    for (let i = 0; i < numerosDecimais.length; i++) {
        while (numero >= numerosDecimais[i]) {
            romano += numerosRomanos[i]
            numero -= numerosDecimais[i]
        }
    }
    return romano
}

console.log(converteRomano(1235))