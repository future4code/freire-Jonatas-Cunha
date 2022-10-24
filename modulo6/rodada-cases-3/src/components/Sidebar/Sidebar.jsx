import * as s from './styles';
import { SiedbarColor } from "../../utils/SiedbarColor";
import IconLoteria from "../../assets/imgs/icon-loteria.png";

const Sidebar = ({ games, setSelectValue, selectValue, results, loader }) => {

    const gamesList = games.map((game, i) => {
        return <option key={i} value={game}>{game.toUpperCase()}</option>
    });

    return (

        <s.Siedbar>

            <s.Svg viewBox="0 0 613 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" fill={SiedbarColor(selectValue)} />
            </s.Svg>


            <s.SiedbarContent>
                <s.Select onChange={(e) => setSelectValue(e.target.value)}>
                    {gamesList}
                </s.Select>

                <s.BoxTitle>
                    <img src={IconLoteria} alt="Icone Loteria" />
                    <s.H1>{selectValue.toUpperCase()}</s.H1>
                </s.BoxTitle>

                <s.BoxContest>
                    <s.H2>CONCURSO</s.H2>
                    <s.H3>{ loader ? "0000 - 00/00/0000" : (results.concurso + " - " + results.data)}</s.H3>
                </s.BoxContest>
            </s.SiedbarContent>
        </s.Siedbar>
    )

};

export default Sidebar;