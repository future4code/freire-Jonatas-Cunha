describe("Exercicio 4", () => {
    test("Deve retornar o número de caracteres de uma string", () => {
        expect(stringLength("teste")).toEqual(5);
        expect(stringLength("teste teste")).toEqual(11);
    })
});

const stringLength = (str: string): number => {
    return str.length;
};