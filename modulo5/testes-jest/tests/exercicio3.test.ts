describe("Exercicio 3", () => {
    test("Deve retorna um numero", () => {
        expect(transformStringInNumber("1")).toEqual(1);
    })
});

const transformStringInNumber = (string: string): number => {
    return Number(string);
};