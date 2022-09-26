describe("Exercicio 6", () => {
    test("A Lista deve conter Astrodev", () => {
        const user: IList = { id: 2, name: 'Astrodev', age: 32 }
        expect(list).toContainEqual(user);
    })
});


interface IList {
    id: number;
    name: string;
    age: number;
}

const list: IList[] = [
    { id: 1, name: 'John Doe', age: 23 },
    { id: 2, name: 'Astrodev', age: 32 },
    { id: 3, name: 'John Travolta', age: 65 },
    { id: 4, name: 'John Wick', age: 43 },
];