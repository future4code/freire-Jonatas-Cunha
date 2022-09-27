describe("Exercicio 2", () => {
    test("Deve retornar um array de strings", () => {
        expect(stringToArray("teste")).toEqual(["t", "e", "s", "t", "e"]);
    })
});

const stringToArray = (str: string): string[] => {
    return str.split("");
};