describe("Exercicio 9", () => {
    test("Converte a data de formato americano para o formato brasileiro", () => {
        expect(convertDate("2020/05/20")).toBe("20/05/2020");
    });
});


const convertDate = (date: string): string => {
    const [year, month, day] = date.split("/");
    return `${day}/${month}/${year}`;
};