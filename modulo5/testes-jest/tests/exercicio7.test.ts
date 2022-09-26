describe("Exercicio 7", () => {
    test("Retorna a media da soma dos numeros", () => {
        const list = [25, 32, 44, 16, 25, 36, 22, 64, 21];
        expect(listAverage(list)).toEqual(32);
        expect(listAverage([10, 4, 7, 6])).toEqual(7);
    });
});


const listAverage = (list: number[]): number => {
    const sum = list.reduce((acc, curr) => acc + curr, 0);
    return Math.ceil(sum / list.length);
};