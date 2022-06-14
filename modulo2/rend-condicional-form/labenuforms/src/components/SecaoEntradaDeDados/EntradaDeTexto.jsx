import React, { Component } from "react";
import { Bloco, Etiqueta } from "../styled";


export default class EntradaDeTexto extends Component {
    state = {
        textoEntrada: "",
    }

    pegarTextoEntrada = (event) => {
        this.setState({ textoEntrada: event.target.value })
    }

    render() {
        return (
            <Bloco>
                <Etiqueta htmlFor={this.props.htmlForLabel}>{this.props.informacao}</Etiqueta>
                <input type={this.props.type} id={this.props.htmlForLabel} value={this.state.textoEntrada} onChange={this.pegarTextoEntrada} />
            </Bloco>
        )
    }
}