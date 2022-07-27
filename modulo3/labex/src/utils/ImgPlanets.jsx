import Jupiter from "../img/planets/jupiter.png";
import Saturno from "../img/planets/saturno.png";
import Urano from "../img/planets/urano.png";
import Netuno from "../img/planets/netuno.png";
import Marte from "../img/planets/marte.png";
import Mercurio from "../img/planets/mercurio.png";
import Venus from "../img/planets/venus.png";
import Terra from "../img/planets/planeta-terra.png";
import Plutao from "../img/planets/plutao.png";

const ImgPlanets = (props) => {
    const { planet } = props;
    switch (planet) {
        case "Júpiter":
        return <img src={Jupiter} alt="Jupiter" />;
        case "Saturno":
        return <img src={Saturno} alt="Saturno" />;
        case "Urano":
        return <img src={Urano} alt="Urano" />;
        case "Netuno":
        return <img src={Netuno} alt="Netuno" />;
        case "Marte":
        return <img src={Marte} alt="Marte" />;
        case "Mercúrio":
        return <img src={Mercurio} alt="Mercurio" />;
        case "Vênus":
        return <img src={Venus} alt="Venus" />;
        case "Terra":
        return <img src={Terra} alt="Terra" />;
        case "Plutão":
        return <img src={Plutao} alt="Plutão" />;
        default:
        return <img src={Terra} alt="Terra" />;
    }
}

export default ImgPlanets;