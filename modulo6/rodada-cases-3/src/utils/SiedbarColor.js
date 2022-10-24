export const SiedbarColor = (prize) => {
    switch (prize) {
        case "mega-sena":
            return "#6BEFA3";
        case "quina":
            return "#8666EF";
        case "lotofacil":
            return "#DD7AC6";
        case "lotomania":
            return "#FFAB64";
        case "timemania":
            return "#5AAD7D";
        case "dia-de-sorte":
            return "#BFAF83";
        default:
            return "#6BEFA3";
    }

}