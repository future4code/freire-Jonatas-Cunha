import { Component } from "react";
import EtapaUm from "./components/EtapaUm/EtapaUm";
import EtapaDois from "./components/EtapaDois/EtapaDois";
import EtapaTres from "./components/EtapaTres/EtapaTres";
import EtapaFinal from "./components/EtapaFinal/EtapaFinal";


export default class App extends Component {
  state = {
    tela: 1,
  }

  proximaEtapa = (event) => {
    event.preventDefault()
    this.setState({ tela: this.state.tela + 1 })
  }

  voltarEtapa = (event) => {
    event.preventDefault()
    this.setState({ tela: this.state.tela - 1 })
  }

  render() {


    const RenderizarNaTela = () => {
      switch (this.state.tela) {
        case 1:
          return <EtapaUm proximo={this.proximaEtapa} />;
        case 2:
          return <EtapaDois proximo={this.proximaEtapa} voltar={this.voltarEtapa} />;
        case 3:
          return <EtapaTres proximo={this.proximaEtapa} voltar={this.voltarEtapa} />;
        case 4:
          return <EtapaFinal />;
      }
    }


    return (
      <div className="App">
        <RenderizarNaTela />
      </div>
    );
  }
}


