import React, { useState } from "react";
import Home from "./Pages/Home/home";
import Card from "./Components/Card/card";
import MatchPage from "./Pages/MatchPage/MatchPage";
import styled from "styled-components";

const Tela = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  `

function App() {

  const [mudarTela, setTela] = useState("inicio");
  
  const MudarPagina = () => {
    switch (mudarTela) {
      case "inicio":
        return (
          <Home />
        );
      default:
        return (
          <MatchPage />
        );
    }
  };
  return (
    <Tela>
      <Card tela={MudarPagina} mudarTela={setTela} pagina={mudarTela} />
    </Tela>
  );
}

export default App;
