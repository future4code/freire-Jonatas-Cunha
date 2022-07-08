import React from "react";
import { ImHeartBroken } from "react-icons/im";
import { ContainerNaoHaMatches } from "./style";

function NaoHaMatches() {
    return (
        <ContainerNaoHaMatches>
           <ImHeartBroken size="65px"/>
           <h2>Não há Matches</h2>
        </ContainerNaoHaMatches>
    );
}

export default NaoHaMatches;