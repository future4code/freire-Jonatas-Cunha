describe("Exercicio 0", () => {
    test("2 é par retorna true", () => {
        expect(isEven(2)).toBeTruthy()
    })

    test("3 é ímpar retorna false", () => {
        expect(isEven(3)).toBeFalsy()
    })

    test("0 é par retorna true", () => {
        expect(isEven(0)).toBeTruthy()
    })
    
});



const isEven = (num: number): boolean => {
    return num % 2 === 0 ? true : false
}; 