import React from "react";
import GetUsuarios from "./Components/GetUsuarios/GetUsuarios";
import PostUsuarios from "./Components/PostUsuaruios/PostUsuarios";
import Botao from "./Components/Botao/Botao";
import styled from "styled-components";

  const ContainerGeral = styled.div`
    background-color: #ecf0f1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center ;
    flex-direction: column;
  `

const Conatiner = styled.div`

`

class App extends React.Component {
  state = {
    pagina: 1,
    nomeBotao: "Lista de Usuarios"
  }

  alterarPagina = () => {
    if(this.state.pagina === 1){
      this.setState({pagina: 2})
      this.setState({nomeBotao: "Cadastrar Usuario"})
    } else {
      this.setState({pagina: 1})
      this.setState({nomeBotao: "Consultar Lista de Usuarios"})
    }
  }

  render() {

    const RenderizarPagina = () => {
      switch(this.state.pagina){
        case 1: 
          return <PostUsuarios/>
        case 2:
          return <GetUsuarios/>
        default:
          return <p>404 Not Found</p>
      }
    }

    return (
      <ContainerGeral className="App">
        <Botao nomeBotao={this.state.nomeBotao} alterarPagina={this.alterarPagina}/>
        <Conatiner>
          <RenderizarPagina/>
        </Conatiner>
      </ContainerGeral>
    );
  }
}
export default App;
