describe("Exercicio 5", () => {
    test("Deve retornar um número aleatório entre 1 e 10", () => {
        expect(randomNumber()).toBeGreaterThanOrEqual(1);
        expect(randomNumber()).toBeLessThanOrEqual(10);
    })
});

const randomNumber = (): number => {
    return Math.floor(Math.random() * 10) + 1
};