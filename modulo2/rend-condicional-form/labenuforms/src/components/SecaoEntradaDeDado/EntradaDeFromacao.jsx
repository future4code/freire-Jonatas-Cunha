import React, { Component } from "react";
import {Bloco, Etiqueta} from "../styled";




export default class EntradaDeFromacao extends Component{
    state = {
       entradaDeSelecao: "",
    }

    pegarTextoEntrada = (event) => {
        this.setState({ textoEntrada: event.target.value })
    }

    render() {
        return (
            <Bloco>
                <Etiqueta htmlFor="escolaridade">4. Qual a sua escolaridade?</Etiqueta>
                <select name="escolaridade" id="escolaridade">
                   <option value="medioCompleto" key="0">Ensino Médio Incompleto</option>
                   <option value="medioCompleto" key="1">Ensino Médio Completo</option>
                   <option value="superiorIncompleto" key="2">Ensino Superior Incompleto</option>
                   <option value="superiorCompleto" key="3">Ensino Superior Completo</option>
                </select>
            </Bloco>
        )
    }
}