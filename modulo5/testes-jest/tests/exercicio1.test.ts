describe("Exercicio 1", () => {
    test("Deve retornar a string em caixa alta", () => {
        expect(toUpperCase("teste")).toBe("TESTE");
    })
});


const toUpperCase = (str: string): string => {
    return str.toUpperCase();
}