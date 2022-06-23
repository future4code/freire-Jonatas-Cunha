import logo from './logo.svg';
import logoTitulo from "../src/img/logo.png"
import { Aplicacao, IconeLogo, Header, TituloLogo, ContainerLateral, Main } from "./style.jsx"
import Botoes from './Components/Botoes/Botoes';
import Carrosel from './Components/Slider/Slider';
import BoasVindas from './Components/BoasVindas/BoasVindas';
import React from 'react';
import IconeHomeBranco from "../src/img/icone-home-brancos.svg"
import IconeBuscarBranco from "../src/img/icone-buscar-branco.svg"
import IconeAdicionarBranco from "../src/img/icone-adicionar-branco.svg"
import PlaylistRecomendada from './Components/PlaylistRecomendada/PlaylistRecomendada';
import PaginaDaPlaylist from './Components/PaginaDaPlaylist/PaginaDaPlaylist';
import PlaylistsNav from './Components/PlaylistsNav/PlaylistsNav';
import BuscarMusicas from './Components/BuscarMusicas/BuscarMusicas';



class App extends React.Component {
  state = {
    pagina: "Inicio",
    nomePlaylist: "",
  }

  alterarPagina = (pagina) => {
    this.setState({ pagina: pagina })
  }

  pegarIdPlaylist = (id, nome) => {
    this.setState({ pagina: id })
    this.setState({ nomePlaylist: nome })
  }

  render() {

    const RenderizarMain = () => {
      switch (this.state.pagina) {
        case "Inicio":
          return (
            <Main>
              <BoasVindas />
              <PlaylistRecomendada capturarID={this.pegarIdPlaylist} />
              <Carrosel />
            </Main>
          )
        case "Buscar":
          return (
            <Main>
              <BuscarMusicas/>
            </Main>
          )
        case "Criar PlayList":
          return (
            <Main>

            </Main>
          )
        default:
          return (
            <Main>
              <PaginaDaPlaylist idPlaylist={this.state.pagina} nomePlaylist={this.state.nomePlaylist} />
            </Main>
          )
      }
    }

    return (
      <Aplicacao className="App">
        <ContainerLateral>
          <Header className="App-header">
            <IconeLogo src={logo} alt="React" />
            <TituloLogo src={logoTitulo} alt="Labefy" />
          </Header>
          <Botoes
            icone={IconeHomeBranco}
            nome="Inicio"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Inicio"}
          />
          <Botoes
            icone={IconeBuscarBranco}
            nome="Buscar"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Buscar"}
          />
          <Botoes
            icone={IconeAdicionarBranco}
            nome="Criar PlayList"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Criar PlayList"}
          />
          <PlaylistsNav capturarID={this.pegarIdPlaylist} idPlaylist={this.state.pagina}/>
        </ContainerLateral>
        <RenderizarMain />

      </Aplicacao>
    );
  }
}
export default App;
