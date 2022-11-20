export const BollsQuantity = (quantity) => {
    switch (quantity) {
        case "mega-sena":
            return 6;
        case "quina":
            return 5;
        case "lotofacil":
            return 15;
        case "lotomania":
            return 20;
        case "timemania":
            return 7;
        case "dia-de-sorte":
            return 7;
        default:
            return 6;
    }

}