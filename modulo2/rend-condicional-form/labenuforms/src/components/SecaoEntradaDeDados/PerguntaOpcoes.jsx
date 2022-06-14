import React, { Component } from "react";
import { Bloco, Selecao, Etiqueta } from "../styled";

export default class PerguntaOpcoes extends Component {
    state = {
        resposta: "",
    }

    pegarOpcao = (event) => {
        this.setState({ resposta: event.target.value })
    }

    render() {
        return (
            <Bloco>
                <Etiqueta htmlFor={this.props.htmlFor}>{this.props.informacao}</Etiqueta>
                <Selecao name={this.props.htmlFor} id={this.props.htmlFor} onChange={this.pegarOpcao}>
                    {this.props.opcoes.map((opcao, index) => {
                        return <option value={opcao} key={index}>{opcao}</option>
                    })}
                </Selecao>
            </Bloco>
        )
    }
}