import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 12px;
  margin-bottom: 20px;
  padding: 12px 80px;
  text-transform: uppercase;
  font-weight: bold;
  background: cornflowerblue;
  cursor: pointer;

  :hover{
    letter-spacing: 2px;
    transition-duration: 0.6s;
  }

`

export default class Botao extends React.Component {
    alterarPagina = () => {
        this.props.alterarPagina()
    }

  render() {
    return (
        <Button onClick={this.alterarPagina}>{this.props.nomeBotao}</Button>
    );
  }
}



