import React from "react";


export default class Botao extends React.Component {
    alterarPagina = () => {
        this.props.alterarPagina()
    }

  render() {
    return (
        <button onClick={this.alterarPagina}>{this.props.nomeBotao}</button>
    );
  }
}



