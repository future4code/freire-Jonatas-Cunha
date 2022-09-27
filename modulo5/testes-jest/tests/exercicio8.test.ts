describe("Exercicio 8", () => {
    test("Retorna a idade atual de acordo com o ano passado e o ano atual", () => {
        expect(age(1990)).toBe(32);
    });
});


const age = (birthYear: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};